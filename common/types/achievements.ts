export interface AchievementItem {
  id: number;
  slug?: string;
  name: string;
  issuing_organization: string;
  category?: string;
  url_credential: string;
  issue_date: string;
  expiration_date?: string;
  image: string;
  is_show?: boolean;
}