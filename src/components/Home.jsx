import Banner from "./Banner";
import AddsCarousel from "./AddsCarousel";
export default function Home({setOpenLoginModal,isUserLoggedIn, theme, setTheme,searchDataList,setSearchDataList }) {
  return (
    <>
      {/* <div className="h-100"> */}
        <Banner setOpenLoginModal={setOpenLoginModal} isUserLoggedIn={isUserLoggedIn} searchDataList={searchDataList} setSearchDataList={setSearchDataList} theme={theme}></Banner>
        <AddsCarousel theme={theme}></AddsCarousel>
      {/* </div> */}
    </>
  );
}
