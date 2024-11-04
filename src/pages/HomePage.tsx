import Image from "next/image";
import Myimg from "@/imgs/my-photo.jpeg";
import { Button } from "@/components/Button";
import { Book } from "iconsax-react";
import { Footer } from "@/components/Footer/Footer";

const linkedin = "https://www.linkedin.com/in/matheus-magalhães-311560277/";

const HomePage = () => {
  return (
    <section className="min-h-[88%] flex flex-col">
      <div className="flex-grow w-full flex justify-around items-center">
        <div className="w-1/2 flex flex-col gap-4 justify-around bg max-sm:w-[90%] max-sm:justify-center max-sm:items-center">
          <div></div>
          <div>
            <h1 className="text-4xl max-sm:text-3xl max-sm:text-center">
              Olá! Sou Matheus Magalhães
            </h1>
            <div className="w-full max-sm:text-center">
              <span className="text-4xl text-purple-700 animate-pulse max-sm:text-3xl">
                Desenvolvedor Web Full Stack
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src={Myimg}
              width={100}
              alt="Matheus Magalhães"
              className="rounded-md sm:hidden"
            />
          </div>
          <p className="w-full opacity-80 text-md max-sm:text-center">
            Sou graduado em Análise e Desenvolvimento de Sistemas e atuo com
            foco em desenvolvimento full-stack, utilizando tecnologias como
            React, Node.js, TypeScript e Next.js. Sou apaixonado por criar
            soluções tecnológicas que agregam valor e resolvem problemas reais,
            sempre buscando excelência técnica e impacto positivo na experiência
            dos usuários.
          </p>
          <div>
            <a href={linkedin} target="_blank">
              <Button
                startIcon={<Book size="32" variant="Bulk" />}
                name="Saiba mais!"
              />
            </a>
          </div>
        </div>

        <div>
          <Image
            src={Myimg}
            width={300}
            alt="Matheus Magalhães"
            className="rounded-md max-sm:hidden"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default HomePage;
