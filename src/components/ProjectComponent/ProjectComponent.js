import "./ProjectComponent.scss";
import imageReact from "../../assets/images/reactjs.png";
function ProjectComponent(props) {
  const handleOnclick = (link) => {
    window.location.href = link;
  };
  console.log(props);
  return (
    <div className="project-container">
      <div className="container">
        <div className="row row-cols-1" style={{ flexDirection: props && props.index % 2 === 0 ? "row-reverse" : "" }}>
          <div
            className="content-left col-lg-6 col-md-12 col-sm-12"
            style={{ backgroundImage: `url(${props.item.image !== "" ? props.item.image : imageReact})` }}
          ></div>
          <div className="content-right col-lg-6 col-md-12 col-sm-12">
            <div className="content-title">{props.item.name}</div>
            <div className="links-to">
              <div className="links-item" title="Front-End" onClick={() => handleOnclick(props.item.fe)}>
                <i className="fa-solid fa-desktop"></i>
              </div>
              <div className="links-item" title="Back-End" onClick={() => handleOnclick(props.item.be)}>
                <i className="fa-solid fa-gears"></i>
              </div>
              {props && props.live !== "" ? (
                <div className="links-item" title="Live" onClick={() => handleOnclick(props.item.live)}>
                  <i className="fa-solid fa-up-right-from-square"></i>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
