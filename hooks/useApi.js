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

  const getFooterText = async () => {
    const {
      data: { message },
    } = await API.get("/api/v1/admin/site-settings", {
      params: {
        site_footer: "site_footer",
      },
    });

    return message;
  };
  const setFooterText = async () => {
    return await API.post("/api/v1/admin/site-settings", {
      // key,
      // top_logo,
      // footer_logo,
      // footer_middle_first_text,
      // footer_middle_second_text,
      // footer_middle_third_text,
      // footer_right_text,
      // footer_address,
      // footer_phone,
      // footer_email,
      // footer_instagram,
      // footer_whatsapp,
      // footer_aparat,
      // footer_digital_media,
      // footer_namad,
      // footer_yara,
      // footer_khodmol_hossein,
    });
  };

  return {
    loginRequest,
    sendVertificationCode,
    resetPassword,
    getFooterText,
    setFooterText,
  };
};
