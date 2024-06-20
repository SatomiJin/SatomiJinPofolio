import { useTranslation } from "react-i18next";
import "./ContactComponent.scss";
function ContactComponent() {
  let { t } = useTranslation();
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row row-cols-1">
          <div className="title-contact col-12">
            <div className="text">{t("contactMe")}</div>
          </div>
          <div className="content col-12">
            <div className="item">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <div className="item-title">{t("email")}</div>
                <a className="item-value" href="mailto:trongdh0904@gmail.com">
                  trongdh0904@gmail.com
                </a>
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="item-title">{t("location")}</div>
                <div className="item-value">{t("hcm")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
