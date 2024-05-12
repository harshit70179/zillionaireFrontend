import { baseUrl } from "./BaseUrl";

export const loginApi=baseUrl+"/user-login"
export const registerApi=baseUrl+"/user-register"
export const changePasswordApi=baseUrl+"/user-change-password"
export const getUserDetailApi="/get-user-detail"
export const getWishListApi="/get-wish-list"
export const addWishListApi="/add-wish-list"
export const forgetPasswordApi=baseUrl+"/forget-password"

//============= Banner ====================
export const getTopBannerApi="/get-top-banner"
export const getMiddleBannerApi="/get-middle-banner"
export const getLowerBannerApi="/get-lower-banner"

//================== Header ===================
export const getHeaderApi="/get-header"

//=================== Products ==================
export const getProductsApi="/get-products"
export const getProductByIdApi="/get-product-by-id"
export const getAllProductsApi="/get-all-products"

//================= Home =================
export const getHomeproductApi="/get-home-product"

//==================== FAQ =================
export const getFAqApi="/get-faq"
export const getSitePolicyApi="/get-sitepolicy"
export const getFooterCollectionApi="/footer-collection"

//================== Order ==============
export const addOrderApi="/add-order"
export const getOrderApi="/get-order"

//======================= Social media =============
export const getSocialMediaApi="/get-social-media"