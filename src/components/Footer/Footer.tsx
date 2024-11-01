import insta from "@/imgs/icons/insta.png";
import linkedin from "@/imgs/icons/linkedin.png";
import whatsapp from "@/imgs/icons/whatsapp.png";
import github from "@/imgs/icons/icon-github.png";
import { IconsSocialMedia } from "./IconsSocialMedia";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-full w-full">
      <IconsSocialMedia
        alt="Instagram"
        href="https://www.instagram.com/theus_dev/"
        src={insta}
      />
      <div className="border border-purple-700 h-4 "></div>
      <IconsSocialMedia
        alt="Linkedin"
        href="https://www.linkedin.com/in/matheus-magalhães-311560277/"
        src={linkedin}
      />
      <div className="border border-purple-700 h-4 "></div>
      <IconsSocialMedia
        alt="WhatsApp"
        href=" https://wa.me/8187323313"
        src={whatsapp}
      />
      <div className="border border-purple-700 h-4 "></div>
      <IconsSocialMedia
        alt="Github"
        href="https://github.com/matheusMPF/"
        src={github}
      />
    </footer>
  );
};
