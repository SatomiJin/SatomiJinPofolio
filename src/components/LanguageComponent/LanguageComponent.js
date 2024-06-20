import "./LanguageComponent.scss";
import vi from "../../assets/images/vi-flag.png";
import en from "../../assets/images/usa-flag.png";
import { LANGUAGES } from "../../language/language";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function LanguageComponent() {
  let [language, setLanguage] = useState("vi");
  let { i18n, t } = useTranslation();

  //   function
  let onChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="language-container">
      <div className="dropdown">
        <div className="language-text" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="flag-icon" style={{ backgroundImage: `url(${language === "vi" ? vi : en})` }}></div>
        </div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {LANGUAGES.map((item, index) => {
            return (
              <li onClick={() => onChangeLanguage(item?.code)} className="dropdown-item" key={index}>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LanguageComponent;
