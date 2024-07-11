import React from "react";
import image from "../assets/pp3.png";
import image2 from "../assets/pp2.png";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Down from "../assets/down.png";
import DownLight from "../assets/downLight.png";
import Right from "../assets/ra.png";
import Footer from "./Footer";
import snap from "../assets/snap.png";
import { useTheme } from "./ThemeContext";
import { GiSkills } from "react-icons/gi";
import RadarChart from "./SkillChar";
import { MdOutlineWorkHistory } from "react-icons/md";
import ToolSection from "./toolsSection.jsx";
import Parallax from "./parallelax.jsx";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="intro container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="mb-4 name">
              <b>Hi there, I'm Adil 👋!</b>
            </h1>
            <div className="tag-divider"></div>
            <p className="lead text-justify">
              I am a skilled <b className="bolding">Data Analyst</b> and
              <b className="bolding"> Power BI Developer</b> with a Bachelor's
              in Computer Science Engineering and over 3+ years of experience in
              business intelligence. <br />
              At Guidehouse, I boosted data visualization effectiveness by 30%
              and improved decision-making processes by 20% through
              <b className="bolding"> Power BI</b> reports and dashboards.
              Proficient in Power BI, Tableau, Python, SQL, and more, I excel at
              transforming complex data into actionable insights. <br />
              My strong analytical skills and collaborative approach ensure
              impactful, data-driven solutions that enhance business strategies.
            </p>
          </div>
          <div className="col-md-5">
            <div className="img-hover-shadow tag-holder-1 w-col w-col-5 custom-card">
              <a href="/about">
                <img
                  src={theme == "dark" ? image : image2}
                  alt="Home"
                  className="img-fluid "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="arrow">
          <a
            href="#Projects"
            data-w-id="9ff6471d-fd0c-c06e-8814-c47d4b5b7c34"
            className="link-block-9 w-inline-block float"
          >
            <img
              src={theme == "dark" ? DownLight : Down}
              loading="eager"
              width="47"
              className="image-76"
            />
          </a>
        </div>
      </div>
      <div className="tag-divider-section"></div>
      <div id="Projects" className="proj">
        <div className="header-project">
          <p className="project-icon">
            <MdOutlineWorkHistory />
          </p>
          <h2>Project</h2>
        </div>
        <div className="subTitle">
          <p>
            Some of <span className="special">my work</span> as a
            <span className="special"> Data Analyst</span> and as a
            <span className="special"> BI Developer</span>.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-hover-shadow tag-holder-2 w-col w-col-5 custom-card-2">
              <a>
                <img src={snap} alt="Home" className="img-fluid proj_img" />
              </a>
            </div>
            <h5 className="mb-4">
              <b>Project 1</b>
            </h5>
            <div className="tag-divider"></div>
            <p className="proj_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, repudiandae. Fuga quasi aliquam voluptatem aspernatur.
              Earum, facilis ipsa! Deleniti itaque quisquam quos sequi labore
              nobis?
            </p>
            <div className="wrapper">
              <a href="" className="button w-inline-block">
                <div className="text-block-37">Learn More</div>
                <img src={Right} width="48" alt="" className="image-61" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-hover-shadow tag-holder-2 w-col w-col-5 custom-card-2">
              <a>
                <img src={snap} alt="Home" className="img-fluid proj_img" />
              </a>
            </div>
            <h5 className="mb-4">
              <b>Project 1</b>
            </h5>
            <div className="tag-divider"></div>
            <p className="proj_desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, repudiandae. Fuga quasi aliquam voluptatem aspernatur.
              Earum, facilis ipsa! Deleniti itaque quisquam quos sequi labore
              nobis?
            </p>
            <div className="wrapper">
              <a href="" className="button w-inline-block">
                <div className="text-block-37">Learn More</div>
                <img src={Right} width="48" alt="" className="image-61" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tag-divider-section"></div>
      {/* <div id="skills" className="skills">
        <div className="header-skills">
          <p className="skill-icon">
            <GiSkills />
          </p>
          <h2>Skills</h2>
        </div>
        <div className="subTitle">
          <p>
            <span className="special">Data Analyst </span>with experience
            including SQL, Python, Tableau, and Power BI. I am proficient in
            handling large datasets, optimizing queries, and creating complex
            visualizations.
          </p>
        </div>
        <div className="row container-skill">
          <div className="col-md-6 chart">
            <RadarChart />
          </div>
          <div className="col-md-6 tool">
            <Parallax />
          </div>
        </div>
      </div> */}
      <Parallax />
      <Footer />
    </>
  );
};

export default Home;
