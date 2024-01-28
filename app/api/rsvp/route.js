import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const createInsertQuery = async (body) => {
  const { name, count, email, phone, isComing, needsTransportation } = body;
  return sql`INSERT INTO public.rsvp (name, count, email, phone, is_coming, needs_transportation) VALUES(${name}, ${count}, ${email}, ${phone}, ${isComing}, ${needsTransportation});`;
};

export async function POST(request) {
  try {
    const data = await request.json();
    await createInsertQuery(data);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
