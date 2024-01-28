import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const createRsvp =
      await sql`CREATE TABLE rsvp (id uuid NOT NULL DEFAULT gen_random_uuid(), name varchar NOT NULL, count smallint NOT NULL, email varchar NOT NULL, phone varchar NOT NULL, is_coming boolean NOT NULL DEFAULT true, needs_transportation boolean NOT NULL DEFAULT false);`;
    const addIndex = await sql`ALTER TABLE rsvp ADD CONSTRAINT rsvp_pk PRIMARY KEY (id);`
    return NextResponse.json({ createRsvp, addIndex }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
