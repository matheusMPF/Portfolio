import Image from "next/image";
import Myimg from "@/imgs/my-photo.jpg";
import { Button } from "@/components/Button";
import { Book } from "iconsax-react";

const linkedin = "https://www.linkedin.com/in/matheus-magalhães-311560277/";

export const HomePage = () => {
  return (
    <section className="w-full flex justify-around items-center h-[90%] max-md:flex-col">
      <div className="w-1/2 flex flex-col gap-4 max-md:w-[90%]">
        <div>
          <h1 className="text-5xl">Olá! Sou Matheus Magalhães</h1>
          <span className="text-5xl text-purple-700 animate-pulse">
            Desenvolvedor Web Full Stack
          </span>
        </div>
        <p className="w-4/5 opacity-80">
          Graduado em Análise e desenvolvimento de sistemas. Sou apaixonado por
          criar soluções tecnológicas que resolvem problemas reais e que agregam
          valor aos usuários.
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
          className="rounded-md max-md:hidden"
        />
      </div>
    </section>
  );
};
