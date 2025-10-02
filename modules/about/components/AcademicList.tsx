"use client";

import { useTranslations } from "next-intl";
import { HiOutlineAcademicCap as AcademicIcon } from "react-icons/hi2";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import AcademicCard from "./AcademicCard";
import { AcademicProps } from "@/common/types/academics";
import { ACADEMICS } from "@/common/constants/academics";


const AcademicList = ({ items = ACADEMICS }: { items?: (AcademicProps & { isShow?: boolean })[] }) => {
  const t = useTranslations("AboutPage.academics");

  const filtered = items?.filter((it) => it.isShow !== false);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("title", { default: "Academics" })} icon={<AcademicIcon />} />
        <SectionSubHeading>
          <p>{t("sub_title", { default: "Teaching assistance and academic contributions" })}</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered?.map((item, index) => (
          <AcademicCard key={index} indexAcademic={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AcademicList;