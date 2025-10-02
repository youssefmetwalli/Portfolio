import Breakline from "@/common/components/elements/Breakline";

import Introduction from "./Introduction";
import SkillList from "./SkillList";
import BentoGrid from "./Bento/BentoGrid";
import Resume from "@/modules/about/components/Resume";

const Home = () => {
  return (
    <>
      <div className="mt-2 mb-2 flex flex-col items-start justify-between gap-4 md:mt-0 md:flex-row md:items-center">
      <Introduction />
      <Resume />
      </div>
      <Breakline className="my-8" />
      <SkillList />
      <Breakline className="my-8" />
      <BentoGrid />
    </>
  );
};

export default Home;
