import { useTranslation } from "react-i18next";
import LanguageComponent from "../LanguageComponent/LanguageComponent";
import "./HeaderComponent.scss";
function HeaderComponent() {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <div className="header-container_pc container">
        <div className="row">
          <div className="logo col col-3">Satomi Jin</div>
          <div className="header-wrapper col col-8">
            <ul className="list-item">
              <a href="#">
                <li className="item">{t(`intro`)}</li>
              </a>
              <a href="#about">
                <li className="item">{t("about")}</li>
              </a>
              <a href="#project">
                <li className="item">{t("project")}</li>
              </a>
              <a href="#contact">
                <li className="item">{t("contact")}</li>
              </a>
            </ul>
          </div>
          <div className="language-options col col-1">
            <LanguageComponent />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="header-container_mobile container">
        <div className="row">
          <div className="header-top col col-12">
            <div className="logo">Satomi Jin</div>
            <LanguageComponent />
          </div>
          <div className="header-bottom col col-12">
            <div className="menu-item_mobile row">
              <a href="#" className="item col col-3">
                <i class="fa-solid fa-address-card"></i>
                {t("intro")}
              </a>

              <a href="#about" className="item col col-3">
                <i class="fa-solid fa-circle-info"></i>
                {t("about")}
              </a>

              <a href="#project" className="item col col-3">
                <i class="fa-solid fa-diagram-project"></i>
                {t("project")}
              </a>

              <a href="#contact" className="item col col-3">
                <i class="fa-solid fa-at"></i>
                {t("contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
