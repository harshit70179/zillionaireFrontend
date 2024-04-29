import { baseUrl } from "./BaseUrl";

export const loginApi=baseUrl+"/user-login"
export const registerApi=baseUrl+"/user-register"
export const changePasswordApi=baseUrl+"/user-change-password"
export const getUserDetailApi="/get-user-detail"
export const getWishListApi="/get-wish-list"
export const addWishListApi="/add-wish-list"

//============= Banner ====================
export const getTopBannerApi="/get-top-banner"
export const getMiddleBannerApi="/get-middle-banner"
export const getLowerBannerApi="/get-lower-banner"

//================== Header ===================
export const getHeaderApi="/get-header"

//=================== Products ==================
export const getProductsApi="/get-products"
export const getProductByIdApi="/get-product-by-id"

//================= Home =================
export const getHomeproductApi="/get-home-product"