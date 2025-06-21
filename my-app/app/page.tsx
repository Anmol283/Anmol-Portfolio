import Navbar from "@/components/navbar"
import Home from "@/components/home"
import About from "@/components/about"
import Journey from "@/components/journey"
import Progress from "@/components/progress"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"


export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="journey"><Journey /></section>
        <section id="progress"><Progress/></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements/></section>
        <section id="contact"><Contact /></section>

      </main>
    </>
  )
}
