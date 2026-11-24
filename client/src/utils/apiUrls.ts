export const apiUrls = {
  auth: {
    sendOtp: "auth/send-otp",
    verifyOtp: "auth/verify-otp",
    completeRegistration: "auth/complete-registration",
    logout: "auth/logout",
  },
  roadmaps: {
    index: "roadmap/",
  },
  categories: {
    index: "category/",
  },
  courses: {
    index: "course",
    details: "course/",
    newest: "course/newest",
  },
  cart: {
    index: "cart",
    addItem: "cart/add-item/",
    deleteItem: "cart/delete-item/",
  },
  order: {
    index: "order",
    checkout: "order/checkout",
  },
  panel: {
    profile: "/panel/profile",
    dashboard: "/panel/dashboard",
    myCourse: "/panel/my-course",
    myOrder: "/panel/my-order",
  },
};
