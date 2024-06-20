// import { useContext } from "react";
// import { themeContext } from "../App";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import "./layout.scss";

function DefaultLayout({ children }) {
  // let themePage = useContext(themeContext);
  return (
    <div className="layout-container">
      <HeaderComponent />
      <div className="body-wrapper">{children}</div>
    </div>
  );
}

export default DefaultLayout;
