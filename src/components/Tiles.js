import React, { useEffect, useState } from "react";

export default function Tiles() {
  const [counter, setCounter] = useState(20);
  const [data, setData] = useState(null);

  const fetchAPI = async () => {
    const resp = await fetch("/api/welcome", {
      method: "POST",
      body: { data: "NextJS" },
    });
    // setTimeout(async () => {
    setData(await resp.json());
    // }, 3000);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log("data", data);
  return (
    <div>
      <h1> Counter is {counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>
        Click Me to reduce counter
      </button>
      <br />
      <br />
      <br />
      <span
        style={{
          backgroundColor: "beige",
          textAlign: "center",
          color: "black",
        }}
      >
        {data ? data.data.name : "Loading..."}
      </span>{" "}
      {"->"} Fetched from <code>/api/welcome</code> API
    </div>
  );
}
