/**
 * company url controller
 */
export const companyUrl = {
  getAllCompany: () => {
    return `/company`;
  },
};

/**
 * user url controller
 */
export const userUrl = {
  getMeUser: () => {
    return `/user/me`;
  },
};

/**
 * worker url controller
 */
export const workerUrl = {
  getAllWorker: () => {
    return `/worker`;
  },

  getMeWorker: () => {
    return `/worker/me`;
  },
};

/**
 * mentor url controller
 */
export const mentorUrl = {
  postPromotionEmailProcess: () => {
    return `/mentor/promotion/process`;
  },
  patchVerify: (digit: string) => {
    return `/mentor/promotion/process/verify?verificationCode=${digit}`;
  },
};
