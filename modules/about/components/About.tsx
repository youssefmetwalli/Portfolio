import Breakline from "@/common/components/elements/Breakline";

import Story from "./Story";
import CareerList from "./CareerList";
import EducationList from "./EducationList";
import AcademicList from "./AcademicList";

const About = () => {
  return (
    <>
      <Story />
      <Breakline className="my-8" />
      <CareerList />
      <Breakline className="my-8" />
      <AcademicList />
      <Breakline className="my-8" />
      <EducationList />
    </>
  );
};

export default About;
