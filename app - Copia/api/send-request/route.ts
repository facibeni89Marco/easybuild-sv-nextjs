import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const MAKE_WEBHOOK_URL =
  "https://hook.eu1.make.com/eg2wad5xvkojzk3n8rkfimluoi3du2yj";

const schema = z.object({
  workType: z.string().min(1).max(50),
  propertyType: z.string().min(1).max(50),
  zone: z.string().min(2).max(120),
  timing: z.string().min(1).max(50),
  fullName: z.string().min(2).max(120),
  phone: z.string().min(6).max(30),
  email: z.string().email().max(255),
});

const labels = {
  workType: {
    completa: "Ristrutturazione completa",
    parziale: "Ristrutturazione parziale (bagno, cucina…)",
    esterni: "Lavori esterni (facciata, giardino…)",
    nuovo: "Nuovo immobile / costruzione",
    altro: "Altro",
  } as Record<string, string>,
  propertyType: {
    appartamento: "Appartamento",
    indipendente: "Casa indipendente / villa",
    commerciale: "Locale commerciale",
    altro: "Altro",
  } as Record<string, string>,
  timing: {
    asap: "Prima possibile",
    "1-3": "Tra 1 e 3 mesi",
    "6m": "Entro 6 mesi",
    info: "Solo informazioni per ora",
  } as Record<string, string>,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const payload = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      workType: data.workType,
      workTypeLabel: labels.workType[data.workType] ?? data.workType,
      propertyType: data.propertyType,
      propertyTypeLabel: labels.propertyType[data.propertyType] ?? data.propertyType,
      zone: data.zone,
      timing: data.timing,
      timingLabel: labels.timing[data.timing] ?? data.timing,
      submittedAt: new Date().toISOString(),
      source: "EasyBuild Savona — sito web",
    };

    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Make webhook error:", res.status, errText);
      return NextResponse.json({ error: "Failed to send request" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: err.issues },
        { status: 400 }
      );
    }
    console.error("send-request error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
