export type SendOtpResType = {
  expiresIn: number;
  resendAfter: number;
  requestsRemaining: number;
  code: string;
};

export type RoadmapResType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  level: string;
  duration: string;
  icon: string;
  skills: string[];
  stepsCount: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}[];

export type RoadmapStepsResType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  level: string;
  duration: string;
  icon: string;
  skills: string[];
  stepsCount: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  steps: {
    id: number;
    title: string;
    description: string;
    topics: string[];
    project: string;
    position: number;
  }[];
};

export type CoursesResType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  activeDiscount: boolean;
  lessons: number;
  rating: string;
  students: number;
  level: string;
  thumbnailImage: string;
  duration: number;
  publishedAt: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  instructor: {
    id: number;
    name: string;
    description: string;
  };
}[];

export type CourseDetailsResType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  activeDiscount: boolean;
  lessons: number;
  rating: string;
  students: number;
  level: string;
  thumbnailImage: string;
  duration: number;
  publishedAt: string;
  details: {
    id: number;
    courseId: number;
    description: string;
    requirements: string;
    learningOutcomes: string[];
    targetAudience: string[];
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  instructor: {
    id: number;
    name: string;
    description: string;
  };
  sections: {
    id: number;
    title: string;
    position: number;
    lessons: {
      id: number;
      title: string;
      duration: string;
      videoUrl: string;
      isFree: boolean;
      position: number;
    }[];
  }[];
};

export type CartResType = {
  cart: {
    summary: {
      subtotal: number;
      totalDiscount: number;
      total: number;
    };
    id: number;
    items: {
      activeDiscount: boolean;
      cartItemId: number;
      discount: number;
      id: number;
      price: number;
      slug: string;
      title: string;
      thumbnailImage: string;
      instructor: {
        id: number;
        name: string;
      };
      category: {
        id: number;
        name: string;
      };
    }[];
  };
};

export type GetDashboardResType = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userName: string | null;
    email: string | null;
    birthday: string | null;
  };
  courseCount: number;
  orderCount: number;
  totalAmounts: number;
};
