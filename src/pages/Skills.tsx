import { CardSm } from "@/components/cards/CardSm";
import { DataSkill } from "@/data/DataSkill";

export const Skills = () => {
  return (
    <section className="flex h-[90%] w-full flex-wrap gap-4 justify-center items-center overflow-y-auto">
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
