import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    document.title = "تغییر متن ارتباط با ما | پنل داشبورد پروژه ایکس";
  });

  return (
    <>
      <Outlet />
    </>
  );
};

export default ContactUs;
