import { CardLg } from "@/components/cards/CardLg";
import { DataExperience } from "@/data/DataExperience";

DataExperience.reverse();

export const Experience = () => {
  return (
    <section className="flex h-full w-full justify-around items-center flex-wrap overflow-y-auto">
      {DataExperience.map((data, key) => {
        return (
          <CardLg
            key={key}
            title={data.title}
            subTitle={data.subTitle}
            description={data.description}
            iconSrc={data.iconSrc}
            period={data.period}
          />
        );
      })}
    </section>
  );
};
