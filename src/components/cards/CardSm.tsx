import { CardType } from "@/types/CardType";
import Image from "next/image";
import "@/app/globals.css";

export const CardSm = (props: CardType) => {
  const { iconSrc, title, description, level } = props;

  const getOpacity = (index: number) => {
    if (level === "Avançado") return "opacity-100";
    if (level === "Intermediário" && index < 2) return "opacity-100";
    if (level === "Básico" && index === 0) return "opacity-100";
    return "opacity-30";
  };

  return (
    <div
      className={`shadow-md w-[45%] h-2/5 bg-zinc-300/10 rounded-md flex items-center gap-4 mt-8 p-3 max-sm:w-[90%] max-md:w-[90%]`}
    >
      <Image src={iconSrc} alt={title} width={100} className="rounded-md" />
      <div className="flex flex-col gap-3 w-full h-full justify-around">
        <h2 className="font-bold tracking-wider text-xl">{title}</h2>

        <p className="w-[95%] max-h-24 opacity-80 tracking-wide text-sm">
          {description}
        </p>

        <div className="flex gap-2 items-end justify-end w-11/12">
          <p className="text-sm opacity-80 text-center">{level}</p>

          <div className="flex gap-1 items-end justify-end">
            <div className={`h-2 bg-purple-700 w-1 ${getOpacity(0)}`}></div>
            <div className={`h-3 bg-purple-700 w-1 ${getOpacity(1)}`}></div>
            <div className={`h-4 bg-purple-700 w-1 ${getOpacity(2)}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
