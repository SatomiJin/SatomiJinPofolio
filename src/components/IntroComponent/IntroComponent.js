import { useTranslation } from "react-i18next";
import "./IntroComponent.scss";

function IntroComponent() {
  let { t } = useTranslation();
  return (
    <div id="intro" className="intro-container">
      <div className="container">
        <div className="row">
          <div className="content-left col-sm-12 col-lg-6 col-md-6">
            <div className="title-intro">Front-End React Developer</div>
            <div className="content-intro">{t("contentIntro")}</div>
            <div className="social-contact">
              <a rel="noreferrer" href="https://github.com/SatomiJin" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a rel="noreferrer" href="https://www.facebook.com/shiyoru.satomi.9/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="cv">
              <a href="../../assets/CV/DongHuuTrong_CV (1).pdf" download={"DongHuuTrong"}>
                <button className="btn btn-outline-primary">{t("download")}</button>
              </a>
            </div>
          </div>
          <div className="content-right col-sm-12 col-lg-6 col-md-6">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
