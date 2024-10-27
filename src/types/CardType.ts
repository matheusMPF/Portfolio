import { StaticImageData } from "next/image";

export type CardType = {
  //default
  iconSrc: string | StaticImageData;
  title: string;
  description: string;

  level?: "Básico" | "Intermediário" | "Avançado" | string;
  srcGithub?: string;
  linkProject?: string;
  subTitle?: string;
  period?: string;
};
