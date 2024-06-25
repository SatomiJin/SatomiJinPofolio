import { useTranslation } from "react-i18next";
import ProjectComponent from "./ProjectComponent";
import "./Projects.scss";
import projects from "../../projectData";
function Projects() {
  let { t } = useTranslation();
  return (
    <div id="project" className="projects-container container">
      <div className="title">
        <div className="text">{t("projectTitle")}</div>
      </div>
      <div className="content">
        {projects &&
          projects.length > 0 &&
          projects.map((item, index) => {
            return <ProjectComponent item={item} index={index + 1} />;
          })}
      </div>
    </div>
  );
}

export default Projects;
