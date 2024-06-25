import { useTranslation } from "react-i18next";
import "./AboutMeComponent.scss";
function AboutMeComponent() {
  const { t } = useTranslation();
  return (
    <div id="about" className="about-me-container">
      <div className="container">
        <div className="row">
          <div className="skills col-12">
            <div className="title">{t("techSkills")}</div>
            <div className="technology-skills">
              <img alt="skill" src="https://skillicons.dev/icons?i=html,css" />
              <img alt="skill" src="https://skillicons.dev/icons?i=postgresql,mongodb" />
              <img alt="skill" src="https://skillicons.dev/icons?i=react,nodejs" />
              <img alt="skill" src="https://skillicons.dev/icons?i=sass,bootstrap" />
            </div>
          </div>
          <div className="about-me col-12">
            <div className="container">
              <div className="row">
                <div className="content-left col-lg-6 col-md-12 col-sm-12"></div>
                <div className="content-right col-lg-6 col-md-12 col-sm-12">
                  <div className="title">{t("aboutMe")}</div>
                  <div className="content">
                    <div className="content-title">{t("aboutMeContentT")}</div>
                    <div className="content-1">&emsp;{t("content1")}</div>
                    <div className="content-1">&emsp;{t("content2")}</div>
                    <div className="content-1">&emsp;{t("content3")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeComponent;
