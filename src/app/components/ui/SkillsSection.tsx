import CursorGlow from "./CursorGlow";
import CursorSpotlight from "./CursorSpotlight";
import InfiniteRow from "./InfiniteRow";

import { skillsData } from "@/app/constants/skillsData";
type Skill = {
    name: string;
    logo: string;
};
const SkillsSection = () => {
    const splitIntoRows = (skills: Skill[], rows = 3): Skill[][] => {
        const result: Skill[][] = Array.from({ length: rows }, () => []);

        skills.forEach((skill, index) => {
            result[index % rows].push(skill);
        });

        return result;
    };
    const [row1, row2, row3] = splitIntoRows(skillsData, 3);
    return (
        <section id="skills" className="pt-20 md:pt-32 relative overflow-hidden">

            {/* 🔥 INSANE EFFECTS */}
            <CursorGlow />
            <CursorSpotlight />
            {/* Background */}
            <div className="absolute inset-0 -z-10 " />

            {/* Heading */}
            <div className="text-center mb-8 relative z-10">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-400 to-purple-800 bg-clip-text text-transparent tracking-tight">
                    Technical Skills
                </h2>
                <p className="text-white/40 mt-4 text-sm tracking-widest">
                    TECHNOLOGIES I WORK WITH
                </p>
            </div>

            {/* Content */}
            <div className=" relative z-10">
                <div className="">

                    <div className="space-y-6">
                        <InfiniteRow items={row1} />
                        <InfiniteRow items={row2} reverse />
                        <InfiniteRow items={row3} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillsSection;