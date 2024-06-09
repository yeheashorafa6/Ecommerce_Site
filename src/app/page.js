import Hero from "./../components/Hero/Hero";
import Prodects from "./../components/Prodects/Prodects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />
      {/* == HERO SECTION == */}

      {/* PRODECTS SECTION */}
      <Prodects />
      {/* == PRODECTS SECTION == */}
    </>
  );
}
