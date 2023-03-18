import axios from "axios";

export const useAPI = () => {
  const API = axios.create({
    baseURL: "http://193.39.9.216/",
  });

  const loginRequest = async (phoneNumber, password) => {
    return await API.post("/api/auth/login", {
      phone: phoneNumber,
      password,
    });
  };

  const sendVertificationCode = async (phoneNumber) => {
    return await API.post("/api/auth/verification-code", {
      phone: phoneNumber,
    });
  };

  const resetPassword = async (
    phoneNumber,
    verificationCode,
    password,
    passwordConfirmation
  ) => {
    return await API.post("/api/auth/forgot-password", {
      phone: phoneNumber,
      verification_code: verificationCode,
      password,
      password_confirmation: passwordConfirmation,
    });
  };

  return {
    loginRequest,
    sendVertificationCode,
    resetPassword,
  };
};
