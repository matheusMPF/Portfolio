import Image, { StaticImageData } from "next/image";

interface PropsIconsSocialMedia {
  href: string;
  src: StaticImageData;
  alt: string;
}

export const IconsSocialMedia = (props: PropsIconsSocialMedia) => {
  const { href, src, alt } = props;

  return (
    <a href={href} target="_blank" className="px-4">
      <Image
        src={src}
        width={30}
        alt={alt}
        className="transition-transform transform hover:scale-110"
      />
    </a>
  );
};
