export interface LinkedInProfile {
  id?: number;
  urn?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  isTopVoice?: boolean;
  isCreator?: boolean;
  profilePicture?: string;
  backgroundImage?: BackgroundImage[];
  summary?: string;
  headline?: string;
  geo?: {
    country?: string;
    city?: string;
    full?: string;
    countryCode?: string;
  };
  educations?: Education[];
  position?: Position[];
  fullPositions?: Position[];
  skills?: Skill[];
}

interface BackgroundImage {
  width: number;
  height: number;
  url: string;
}

interface Education {
  start?: DateInfo;
  end?: DateInfo;
  fieldOfStudy?: string;
  degree?: string;
  grade?: string;
  schoolName?: string;
  description?: string;
  activities?: string;
  url?: string;
  schoolId?: string;
  logo?: Logo[];
}

interface DateInfo {
  year: number;
  month: number;
  day: number;
}

interface Logo {
  url: string;
  width: number;
  height: number;
}

interface Position {
  companyId?: number;
  companyName?: string;
  companyUsername?: string;
  companyURL?: string;
  companyLogo?: string;
  companyIndustry?: string;
  companyStaffCountRange?: string;
  title?: string;
  multiLocaleTitle?: { [key: string]: string };
  multiLocaleCompanyName?: { [key: string]: string };
  location?: string;
  description?: string;
  employmentType?: string;
  start?: DateInfo;
  end?: DateInfo;
}

interface Skill {
  name: string;
  passedSkillAssessment: boolean;
  endorsementsCount: number;
}