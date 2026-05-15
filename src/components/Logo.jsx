export default function Logo({theme,setTheme}) {
  return (
    <>
      <div className="d-flex align-items-center">
       <img className="h-50px logoImage" src={
        theme == "dark"
      ? "../images/busifyLogoWhite.png"
      : "../images/busifyLogo.png"
       } alt="logo" />
      </div>
    </>
  );
}
