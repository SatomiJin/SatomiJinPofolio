import i18next from "i18next";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "vi",
  lng: "vi",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    vi: {
      translation: {
        intro: "Giới thiệu",
        about: "Về tôi",
        project: "Dự án",
        contact: "Liên hệ",
        contentIntro:
          "Ya Hallo! Tôi là Đồng Hữu Trọng hoặc bạn có thể gọi tôi là Jin, một lập trình viên Front-End đến từ Việt Nam",
        techSkills: "Kỹ năng công nghệ",
        aboutMe: "Về tôi",
        aboutMeContentT: "Một FullStack Developer tới từ Thành Phố Hồ Chí Minh, Việt Nam",
        content1:
          "Xin chào, Tôi là Đồng Hữu Trọng (Jin), Một FullStack Developer. Tôi sử dụng ReactJS cho FrontEnd và NodeJS cho BackEnd",
        content2:
          "Đối với cơ sở dữ liệu, tôi có kinh nghiêm với cơ sở dữ liệu quan hệ (PostgreSQL, SQL Server) và cơ sở dữ liệu NoSQL như MongoDB",
        content3: "Hiện tại, Tôi tập chung vòa ReactJS cùng với Bootstrap 5... Để thiết kế giao diện người dùng.",
        projectTitle: "Dự Án",
        contactMe: "Liên Hệ Tôi",
        email: "Địa Chỉ Email",
        location: "Địa chỉ",
        hcm: "Thủ Đức, Hồ Chí Minh",
        download: "Tải CV .pdf",
      },
    },
    en: {
      translation: {
        intro: "Introduce",
        about: "About Me",
        project: "Projects",
        contact: "Contact Me",
        contentIntro: "Ya Hallo, I'm Đồng Hữu Trọng or you can call me is Jin, a Front-End Developer from Vietnam.",
        techSkills: "Technology Skills",
        aboutMe: "About Me",
        aboutMeContentT: "FullStack Developer from Ho Chi Minh City, Viet Nam",
        content1:
          "Hello, I'm Đồng Hữu Trọng (Satomi Jin) a Fullstack developer specializing in Frontend with ReactJS and Backend with Node.js.",

        content2:
          "When it comes to databases, I have experience with relational databases like PostgreSQL and SQL Server, as well as NoSQL databases such as MongoDB.",
        content3: "Currently, I am focused on ReactJS along with Bootstrap 5 for designing user interfaces.",
        projectTitle: "Projects",
        contactMe: "Contact Me",
        email: "Email Address",
        location: "Location",
        hcm: "Thu Duc, Ho Chi Minh",
        download: "Download CV .pdf",
      },
    },
  },
});

export default i18next;
