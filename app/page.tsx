import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  //from-indigo-600 via-blue-400 to-green-500
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-blue-400 to-indigo-600">
      <NavBar/>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/img/barisyenigun.jpeg"}
          alt="My Photo"
          width={350}
          height={350}
          className="rounded-full"
        />
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}
