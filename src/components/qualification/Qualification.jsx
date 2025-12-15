import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className= {toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className= {toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachlore of Science</h3>
                <span className="qualification__subtitle">
                  Computer Science
                </span> 
                

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2007 - 2012 </i>
                </div>
                
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Entrance Examination</h3>
                <span className="qualification__subtitle">
                  Vibrant Academy(Drop Year)
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2019 - 2020</i>
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Lord Buddha Public School(CBSE)
                  <span> [75</span><i class="uil uil-percentage"></i>]
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2017 - 2019</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__subtitle">
                  West Point Academy(ICSE)
                  <br/>
                  <span> [73</span><i class="uil uil-percentage"></i>]
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2015 - 2017</i>
                </div>
              </div>
            </div> */}
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Golang Engineer</h3>
                <span className="qualification__subtitle">
                  Valtech
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2023 - Present</i>
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
                <h3 className="qualification__title">Fullstack developer</h3>
                <span className="qualification__subtitle">Rhizome
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2022 - 2023</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Full Stack Engineer</h3>
                <span className="qualification__subtitle">
                 banQi
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2020 - 2021</i>
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
                <h3 className="qualification__title">Full Stack Engineer</h3>
                <span className="qualification__subtitle">Linx 
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2018 - 2020</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Golang, Python JavaScript(React, Vue) Developer</h3>
                <span className="qualification__subtitle">
                 banQi
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2013 - 2016</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
