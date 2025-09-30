import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import Publications from "@/modules/achievements/components/Publications";

const AchievementsPage = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Achievements />
      <div className="my-10 border-t border-neutral-800" />
      <Publications />
    </Container>
  );
};

export default AchievementsPage;
