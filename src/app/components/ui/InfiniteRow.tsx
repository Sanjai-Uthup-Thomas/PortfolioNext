import { SkillCard } from "./SkillCard ";

const InfiniteRow = ({ items, reverse = false }: any) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="absolute left-0 top-0 h-full w-32  z-10" />
      <div className="absolute right-0 top-0 h-full w-32   z-10" />

      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          } `}
      >
        {[...items, ...items].map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteRow;