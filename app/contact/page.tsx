import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BiMapPin, BiPhone } from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs"
import { MdMail } from "react-icons/md"

const Contact = () => {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">

          <Link href="/">
            <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
              Voltar <BsArrowLeft className="ml-2"/>
            </Button>
          </Link>
          <div className="space-y-6">
            <h1 className="lg:text-5xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 h-14 mt-2 sm:mt-0">Entre em contato</h1>
            <div className="space-y-6">
              <p className="text-pretty text-neutral-200 tracking-tight">
                Estou sempre aberto para discutir novos projetos e oportunidades, entre em contato comigo a partir dos métodos abaixo!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                  <MdMail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <a href="" className="text-neutral-500 hover:text-emerald-400 transition-colors">felipegp996@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                  <BiPhone className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <a href="" className="text-neutral-500 hover:text-emerald-400 transition-colors">+55 (15) 99122-9732</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                  <BiMapPin className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="font-medium">Localização</h3>
                    <a href="" className="text-neutral-500 hover:text-emerald-400 transition-colors">Sorocaba, São Paulo - Brasil</a>
                  </div>
                </div>
              </div>

              {/* <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Send me a message!</h2>

                <form action="" className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium">Name</label>
                    <input type="text" name="" id="name" placeholder="Your name" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium">E-mail</label>
                    <input type="text" name="" id="name" placeholder="Your E-mail" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium">Message</label>
                    <textarea name="" id="message" rows={5} placeholder="Your message" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"></textarea>
                  </div>

                  <Button className="w-full text-black bg-emerald-400 hover:bg-emerald-500">Send Message</Button>
                </form>
              </div> */}
            </div>
          </div>
      </main>
    </div>
  )
}

export default Contact