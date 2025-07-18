import { Button } from "@/components/ui/button"
import Link from "next/link"
import {BsArrowLeft} from "react-icons/bs"

const About = () => {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
            Back <BsArrowLeft className="ml-2"/>
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">About me</h1>
          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque exercitationem aut temporibus omnis vero, molestiae, maxime error ex autem distinctio architecto, non eum? Cupiditate vero facilis velit quidem exercitationem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempora provident, sequi rerum fugit aut voluptatem unde blanditiis eveniet odit facere enim dignissimos ex ullam sit necessitatibus dolorum sapiente reiciendis?</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Education</h2>
            <p className="font-medium">Bacharel em Engenharia Mecatrônica</p>
            <p className="text-neutral-500">FACENS, 2015 - 2020</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Professional Experience</h2>
            <p className="font-medium">Desenvolvedor front-end Jr.</p>
            <p className="text-neutral-500">BLM Serviços, 2020 - 2021</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About