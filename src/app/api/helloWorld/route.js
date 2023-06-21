import { NextResponse } from "next/server";

export async function GET(request) {
  const data = { name: "John Doe", status: 200 };
  return NextResponse.json({ data });
}
