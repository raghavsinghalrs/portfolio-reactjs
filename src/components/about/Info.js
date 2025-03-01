import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experince</h3>
        <span className="about__subtitle">
          Software Engineer @Visionwaves | Ex-Inncircles
        </span>
      </div>
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">
          AngularJs | ReactJs | Javascript | Nodejs | Sql | Python
        </span>
      </div>
    </div>
  );
};

export default Info;
