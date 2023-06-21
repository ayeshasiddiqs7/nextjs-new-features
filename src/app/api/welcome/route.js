import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("request", request);
  const reqData = request.body;
  console.log("reqData", reqData);
  const data = { name: "John Doe", status: 200 };
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return NextResponse.json({ data });
}
