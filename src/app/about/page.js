"use client";

import { useState } from "react";
import ArtistPage from "../../components/ArtistPage";

export default function AboutPage() {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <>
        <ArtistPage
          artist={{
            id: "the-beatles",
            name: "The Beatles",
          }}
        />
      </>
    );
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    );
  }
}
