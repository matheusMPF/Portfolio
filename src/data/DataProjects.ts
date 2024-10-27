import imgInstagramLogin from "@/imgs/imgsProjects/Tela-instagram.png";
import imgStarbucks from "@/imgs/imgsProjects/startbucks.png";
import imgApiBook from "@/imgs/imgsProjects/apiBook.png";
import imgHdcHost from "@/imgs/imgsProjects/hdcHost.png";
import { CardType } from "@/types/CardType";

export const DataProjects: CardType[] = [
  {
    iconSrc: imgInstagramLogin,
    title: "Tela de Login do Instagram",
    description:
      "Neste projeto, desenvolvi uma réplica da tela de login do Instagram, aplicando conhecimentos em estruturas HTML e CSS. Utilizei conceitos avançados de Flexbox para criar um layout responsivo e fiel ao design original.",
    srcGithub: "https://github.com/matheusMPF/login-instagram",
    linkProject: "https://matheusmpf.github.io/login-instagram/",
  },
  {
    iconSrc: imgApiBook,
    title: "API e-commerce de Livros",
    description:
      "Trata-se de um projeto acadêmico com o objetivo de desenvolver um e-commerce de livros. Utilizei o Spring Boot para criar as funcionalidades do back-end, integrando com o banco de dados e implementando operações CRUD (Create, Read, Update, Delete).",
    srcGithub: "https://github.com/matheusMPF/apiBooks",
    linkProject: "https://github.com/matheusMPF/apiBooks",
  },
  {
    iconSrc: imgStarbucks,
    title: "LandPage Starbucks",
    description:
      "Desenvolvi uma landing page simulando a divulgação da marca Starbucks. Neste projeto, utilizei HTML, CSS e JavaScript para criar interações com o usuário. Além disso, apliquei conceitos de Flexbox e responsividade, garantindo uma experiência otimizada tanto para dispositivos móveis quanto para notebooks.",
    srcGithub: "https://github.com/matheusMPF/starbucks",
    linkProject: "https://matheusmpf.github.io/starbucks/",
  },
  {
    iconSrc: imgHdcHost,
    title: "LandPage hDc Host",
    description:
      "Desenvolvi uma landing page simulando a divulgação da plataforma de domínios hDc Host. Para este projeto, utilizei exclusivamente HTML e CSS, criando um design simples e funcional, focado na apresentação clara e atraente da plataforma.",
    srcGithub: "https://github.com/matheusMPF/hdc-host",
    linkProject: "https://matheusmpf.github.io/hdc-host/#services",
  },
];
