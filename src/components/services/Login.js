import { changePasswordApi, forgetPasswordApi, loginApi, registerApi, userVerificationApi } from "../constant/Api";
import * as opsService from "./Ops";
import config from "../constant/Config";

  export const logIn = async (data) => {
    let result = await opsService.postdata(
      loginApi,data,  
    );
    return result;
  };
  export const register = async (data) => {
    let result = await opsService.postdata(
      registerApi,data,  
    );
    return result;
  };
  export const changePassword=async(data)=>{
    let result = await opsService.postdata(changePasswordApi, data, config);
    return result;
  }
  export const forgetPassword=async(data)=>{
    let result = await opsService.postdata(forgetPasswordApi, data);
    return result;
  }
  export const userVerification=async(data)=>{
    let result = await opsService.postdata(userVerificationApi, data);
    return result;
  }