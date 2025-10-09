import type { AchievementItem } from "@/common/types/achievements";
import { ACHIEVEMENTS } from "@/common/constants/achievements";

export const getAchievements = async (): Promise<AchievementItem[]> => {
  return ACHIEVEMENTS
    .filter(a => a.is_show !== false)
    .sort((a, b) => new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime());
};

export const getAchievementBySlug = async (slug: string): Promise<AchievementItem | null> => {
  const norm = (s: string) =>
    s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const item =
    ACHIEVEMENTS.find(a => a.slug && norm(a.slug) === norm(slug)) ??
    ACHIEVEMENTS.find(a => norm(a.name) === norm(slug)) ??
    null;
  return item ? JSON.parse(JSON.stringify(item)) : null;
};
