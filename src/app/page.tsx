import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Service from "@/components/service";
import Contact from "@/components/contact";


export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
    <Service/>
    <Contact />
   </>

  );
}
