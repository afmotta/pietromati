"use server";

import {
  Accomodations,
  Header,
  Hero,
  Gift,
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
      <Gift />
      {/* <Palette /> */}
    </>
  );
}
