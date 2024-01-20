"use server";

import {
  Accomodations,
  Header,
  Hero,
  Gift2,
  Wedding,
  RSVP,
  Party,
  Palette,
} from "./components";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Wedding />
      <Party />
      <RSVP />
      <Accomodations />
      <Gift2 />
      {/* <Palette /> */}
    </>
  );
}
