import { useEffect, useState } from "react";
import "./Banner.css";
import { Toast, ToastHeader, ToastBody, ToastContainer } from "react-bootstrap";
import SearchCard from "./SearchCard";
import { useTranslation } from "react-i18next";

export default function Banner({
  setOpenLoginModal,
  isUserLoggedIn,
  theme,
  setTheme,
  searchDataList,
  setSearchDataList,
}) {
   const { t ,i18n } = useTranslation();
  return (
    <>
      <div className={`h-100vh ${theme}`}>
        <div className={`g-0 h-75 bannerBgImage ${theme}`}>
          <div className="h-100 row g-0">
            <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex d-md-flex d-none h-100 p-4"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex flex-column justify-content-center align-items-center px-5">
              <h1 className="py-3 fw-bold text-center bannerText fst-italic">
                {t("bannertext1")}
              </h1>
              <h3 className="text-center py-3 bannerText fst-italic">
                {t("bannertext2")}
              </h3>
              <button className="outline-0  border-0 banner-button my-3 rounded-pill p-2 px-4">
                {t("bookNow")}
              </button>
            </div>
          </div>
          {/* SEARCH VIA PLACES FORM -------------------------------------- */}
          <SearchCard
            searchDataList={searchDataList}
            setSearchDataList={setSearchDataList}
            theme={theme}
            isUserLoggedIn={isUserLoggedIn}
            setOpenLoginModal={setOpenLoginModal}
          ></SearchCard>
        </div>
      </div>
    </>
  );
}
