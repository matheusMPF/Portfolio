import { CardType } from "@/types/CardType";
import Image from "next/image";
import { ButtonSm } from "../Button";
import { Eye } from "iconsax-react";

import iconGithub from "@/imgs/icons/icon-github.png";

export const CardLg = (props: CardType) => {
  const {
    iconSrc,
    title,
    description,
    subTitle,
    srcGithub,
    linkProject,
    period,
  } = props;

  return (
    <div
      className={`shadow-md max-w-[80%] h-56 bg-zinc-300/10 rounded-md flex items-center gap-4 mt-4 mb-4 p-3 max-sm:w-full max-md:w-full`}
    >
      <Image src={iconSrc} alt={title} width={180} className="rounded-md" />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="font-bold tracking-wider text-xl">{title}</h2>
          {subTitle ? (
            <span className="text-sm opacity-70">{period}</span>
          ) : (
            <a
              href={srcGithub}
              target="_blank"
              className="transition-all hover:scale-105"
            >
              <Image
                alt={title}
                src={iconGithub}
                width={30}
                className="md:hidden"
              />
            </a>
          )}
        </div>

        {subTitle && (
          <h2 className="font-medium text-lg text-zinc-600">{subTitle}</h2>
        )}

        <div className={`flex justify-between w-11/12`}>
          <p className="w-[95%] max-h-24 opacity-80 tracking-wide overflow-y-auto text-sm">
            {description}
          </p>
        </div>

        {!subTitle && (
          <div className="flex items-center justify-end w-full">
            <a href={linkProject} target="_blank">
              <ButtonSm
                name="Ver Projeto"
                finishIcon={<Eye size="32" variant="Bulk" />}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
