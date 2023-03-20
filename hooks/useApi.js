import axios from "axios";

let accessToken = localStorage.getItem("token");

const API = axios.create({
  baseURL: "http://193.39.9.216/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const useAPI = () => {
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
    const { data } = await API.get("/api/v1/admin/site-settings", {
      params: {
        key: "site_footer",
      },
    });

    return data;
  };

  const setFooterText = async (values) => {
    return await API.post("/api/v1/admin/site-settings", {
      key: "site_footer",
      values,
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

  const getOneFinancialAssistances = async (id) => {
    if (id.queryKey[1]) {
      const { data } = await API.get(
        `/api/v1/admin/payments/${id.queryKey[1]}`
      );
      return data;
    }
  };

  const deleteOneFinancialAssistance = async (id) => {
    return API.delete(`/api/v1/admin/payments/${id}`);
  };

  const getAllFinancialAssistances = async (page) => {
    const { data } = await API.get(
      `/api/v1/admin/payments?page=${page.queryKey[1]}`
    );

    return data;
  };

  const getAllNonFinancialAssistances = async (page) => {
    const { data } = await API.get(
      `/api/v1/admin/non-financial-assistance?page=${page}`
    );

    return data;
  };

  return {
    loginRequest,
    sendVertificationCode,
    resetPassword,
    getFooterText,
    setFooterText,
    getOneFinancialAssistances,
    deleteOneFinancialAssistance,
    getAllFinancialAssistances,
    getAllNonFinancialAssistances,
  };
};
