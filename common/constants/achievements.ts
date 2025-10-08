import type { AchievementItem } from "../types/achievements";

export const ACHIEVEMENTS: AchievementItem[] = [
    {
        id: 1,
        slug: "google-cloud",
        name: "Introduction to Generative AI",
        issuing_organization: "Google",
        category: "Certification",
        url_credential: "https://www.cloudskillsboost.google/public_profiles/78aa5d6b-0a43-4afe-b0ef-1f576bec6cc1/badges/17907967",
        issue_date: "2025-08-29",      
        expiration_date: "2028-08-29",
        image: "/images/achievements/googleAI.png",
        is_show: true
      },
      {
        id: 2,
        slug: "aws",
        name: "AWS Cloud Practitioner Essentials",
        issuing_organization: "AWS",
        category: "Certification",
        url_credential: "https://skillbuilder.aws/learn",
        issue_date: "2025-10-08",      
        expiration_date: "2028-08-29",
        image: "/images/achievements/awscloudpractioner.png",
        is_show: true
      },
      
]