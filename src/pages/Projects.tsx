import { CardLg } from "@/components/cards/CardLg";
import { DataProjects } from "@/data/DataProjects";

const Projects = () => {
  return (
    <section className="flex max-h-[90%] w-full flex-col items-center overflow-y-auto">
      {DataProjects.map((data, index) => {
        return (
          <CardLg
            key={index}
            title={data.title}
            description={data.description}
            iconSrc={data.iconSrc}
            srcGithub={data.srcGithub}
            linkProject={data.linkProject}
          />
        );
      })}
    </section>
  );
};

export default Projects;
