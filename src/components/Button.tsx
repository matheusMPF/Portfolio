import { ComponentProps, ReactNode } from "react";

interface PropsButton extends ComponentProps<"button"> {
  name: string;
  startIcon?: ReactNode;
  finishIcon?: ReactNode;
}

export const Button = (props: PropsButton) => {
  const { name, startIcon, finishIcon } = props;

  return (
    <button
      className={`bg-zinc-200 text-zinc-900/80 rounded-lg py-4 px-8 transition- transition-all duration-500 hover:text-zinc-100 hover:bg-purple-700 hover:shadow-[0_0_1px_#7e22ce,0_0_2px_#7e22ce,0_0_20px_#7e22ce] flex items-center justify-center gap-1`}
    >
      {startIcon}
      {name}
      {finishIcon}
    </button>
  );
};

interface PropsButtonSm {
  startIcon?: ReactNode;
  name: string;
  finishIcon?: ReactNode;
}

export const ButtonSm = (props: PropsButtonSm) => {
  const { startIcon, name, finishIcon } = props;

  return (
    <button
      className={`bg-zinc-200 text-sm text-zinc-900/80 rounded-lg py-2 px-4 transition- transition-all duration-500 hover:text-zinc-100 hover:bg-purple-700 hover:shadow-[0_0_1px_#7e22ce,0_0_2px_#7e22ce,0_0_20px_#7e22ce] flex items-center justify-center gap-1`}
    >
      {startIcon}
      {name}
      {finishIcon}
    </button>
  );
};
