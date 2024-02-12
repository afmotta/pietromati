"use server";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { Table } from "./Table";

const PAGE_SIZE = 10;

async function getData(page) {
  "use server";
  const data = await sql`SELECT * FROM public.rsvp LIMIT ${PAGE_SIZE} OFFSET ${
    PAGE_SIZE * (page - 1)
  }`;
  const countQueryResult = await sql`SELECT COUNT(*) FROM public.rsvp`;
  return { rows: data.rows, count: countQueryResult.rows[0].count };
}

export default async function Admin({ searchParams }) {
  if (searchParams.password !== process.env.VERCEL_ADMIN_PASSWORD) {
    return <>Forbidden</>;
  }
  if (!searchParams.page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    redirect(`/admin?${params.toString()}`);
  }
  const page = parseInt(searchParams.page);

  const { rows, count } = await getData(page);

  return <Table rows={rows} count={count} page={page} pageSize={PAGE_SIZE} />;
}
