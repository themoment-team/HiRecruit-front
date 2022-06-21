/**
 * company url controller
 */
export const companyUrl = {
  getAllCompany: () => {
    return `/company`;
  },
};

/**
 * worker url controller
 */
export const workerUrl = {
  getAllWorker: () => {
    return `/worker`;
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
