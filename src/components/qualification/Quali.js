import React, { useState } from "react";
import "./quali.css";

const Quali = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Amity University, Madhya Pradesh
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  12<sup>th</sup> MP Board
                </h3>
                <span className="qualification__subtitle">
                  T.R Gandhi Public School, Morena
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  10<sup>th</sup> CBSE
                </h3>
                <span className="qualification__subtitle">
                  New T.R Gandhi Public School, Morena
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Visionwaves</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Inncircles</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2023 - July 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SDE Intern</h3>
                <span className="qualification__subtitle">
                  {" "}
                  September 2022 - April 2023
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Machine learning Intern
                </h3>
                <span className="qualification__subtitle">
                  Elite Techno Groups
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> August 2021 -
                  September 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quali;
