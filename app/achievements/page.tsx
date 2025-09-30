import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import Publications from "@/modules/achievements/components/Publications";

const AchievementsPage = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("publications_title")} description={t("publications_description")}/>
      <Publications />
      <div className="my-10 border-t border-neutral-800" />
      <PageHeading title={t("title")} description={t("description")} />
      <Achievements />
    </Container>
  );
};

export default AchievementsPage;
