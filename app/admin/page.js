"use server";
import { sql } from "@vercel/postgres";

async function getData() {
  "use server";
  const data = await sql`SELECT * FROM public.rsvp`;
  return { rows: data.rows, count: data.rowCount };
}

export default async function Admin() {
  const data = await getData();

  return <>ADMIN: {data.count}</>;
}
