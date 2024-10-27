import { CardSm } from "@/components/cards/CardSm";
import { DataSkill } from "@/data/DataSkill";

export const Skills = () => {
  return (
    <section className="flex flex-col h-full w-full md:flex-row flex-wrap gap-4 justify-center items-center">
      {DataSkill.map((data, key) => {
        return (
          <CardSm
            key={key}
            title={data.title}
            description={data.description}
            iconSrc={data.iconSrc}
            level={data.level}
          />
        );
      })}
    </section>
  );
};
