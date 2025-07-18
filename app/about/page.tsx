import { Button } from "@/components/ui/button"
import Link from "next/link"
import {BsArrowLeft} from "react-icons/bs"

const About = () => {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
            Voltar <BsArrowLeft className="ml-2"/>
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">Sobre mim</h1>
          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>Técnico e Engenheiro Mecatrônico de formação, sempre fui averso a idéia de programação, os embarcados cheios de fios com lógicas abstratas e compiladores complicados sempre foram a danação durante minha formação. Só de lembrar dos Arduinos e PICs com seus inúmeros pinos e portas me fazer tremer na base e arrepiar os pelos da minha nuca, por isso durante minha formação nunca pensei nem por um momento que me dedicaria aos códigos, terminais e letrinhas coloridas num fundo escuro.</p>
            <p>Isso era uma realidade até finalmente ter contato com o desenvolvimento Web!</p>
            <p>Depois que conheci o Front End, me apaixonei perdidamente por esse braço do desenvolvimento, ver as tabelas, cards, headers e heros, botões coloridos e divs centralizadas, eu não pude pensar em outra coisa que não fosse: "Eu preciso me aprofundar mais nesse universo".</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Educação</h2>
            <p className="font-medium">Bacharel em Engenharia Mecatrônica</p>
            <p className="text-neutral-500">FACENS, 2015 - 2020</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Experiência profissional</h2>
            <div className="mb-6">
              <p className="font-medium">Desenvolvedor front-end Jr. - BLM Serviços, 2021 - 2022</p>
              <p className="text-sm text-neutral-500">Responsável pelo desenvolvimento e manutenção de aplicações voltadas ao E-Commerce e Leilões online, utilizando React, Typescript, SCSS e HTML. utilização de GitFlow no versionamento do projeto.</p>
            </div>
            <div className="mb-6">
              <p className="font-medium">Desenvolvedor front-end - Beta Learning/Clear Sale, 2022 - 2025</p>
              <p className="text-sm text-neutral-500">Desenvolvedor Front-end responsável por manter e criar funcionalidades no projeto MyClear utilizando Vue.Js, SCSS, HTML e Vuex, utilizando gitflow e Azure DevOps no versionamento e documentação do projeto</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About