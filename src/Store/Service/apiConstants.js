module.exports = {
  //BASE_URL: 'http://192.168.2.1:3000/api',
  BASE_URL: 'http://sensen-terraform-elb-127760359.us-east-1.elb.amazonaws.com/API',
  LOGIN: '/users/login?include=user',
  SIGNUP: '/users',
  UPDATE_USER_IFO: '/users/updateUserInfoByUserId',
  SEND_FORGOT_PASSWORD_EMAIL: '/users/reset',

  SEARCH_PART: '/spareParts/findSparepart',
  SEARCH_INTERCHANGE: '/interchanges/findinterchange',
  SEARCH_PART_YEAR_MAKE_MODEL: '/spareParts/findSparepartByYearModelMake',
  PART_DETAILS_BY_ID: '/spareParts/findSparepartDetailsById',
  DROPDOWN_VALUES: '/spareParts/findDropDownValues',

  PRODUCT_GUIDE_TYPE: '/productGuides/searchGuide',

  BRAKING_NEWS: '/breakingNews/searchNews',
  BRAKING_NEWS_category: '/breakingNews/findDropDownValues',

  SLIDING_IMAGES: '/sliderImages/sliderImagesArray',
  FAQ: '/faqs/getFAQ',

  VIDEO_HUB: '/videohubs/searchVideos'
};
