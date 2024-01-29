import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // await sql`DROP TABLE rsvp`;
    // const createRsvp =
    //   await sql`CREATE TABLE rsvp (id uuid NOT NULL DEFAULT gen_random_uuid(), name varchar, count smallint, email varchar, phone varchar, is_coming boolean DEFAULT true, needs_transportation boolean DEFAULT false, notes varchar);`;
    // const addIndex =
    //   await sql`ALTER TABLE rsvp ADD CONSTRAINT rsvp_pk PRIMARY KEY (id);`;
    // return NextResponse.json({ createRsvp, addIndex }, { status: 200 });
    await sql`CREATE OR REPLACE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;`;
    await sql`ALTER TABLE rsvp ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();`
    return NextResponse.json({ msg: "Currently disabled" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
