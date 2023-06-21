"use client";

async function getData() {
  const res = await fetch("https://api.randomuser.me/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DashboardPage() {
  let data = await getData();

  console.log("data", data);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      {data.hasOwnProperty("results")
        ? data.results.map((user) => (
            <>
              <span>{user.name.first}</span>
              <br />
            </>
          ))
        : null}
    </div>
  );
}
