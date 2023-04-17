import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";
import myPic from "../image/bw.jpg";
import styles from "../styles/pages css/About.module.css";
import {GitHub, GitHubIcon,LinkedIn} from '@mui/icons-material';
import Link from "next/link";

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            Hi! I'm Omkar, a Software Developer from Pune, India.
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <div className={styles.text}>
              {" "}
              I completed my Bachelor's degree in Renewable Energy from
              SPPU and am currently pursuing my journey as a self-taught
              developer. <br />{" "}
            </div>

            <div className={styles.text}>
              My passion for programming began with C, one of the very first
              programming languages I learned. From there, I delved into HTML,
              CSS, JavaScript, ReactJS, NextJS, Node, Express, MongoDb, Git and
              many more programming languages and tools. These skills were
              acquired from various online resources, such as CodeWithHarry,
              freeCodeCamp, MDN, and W3Schools, among others. It's been a
              never-ending path of learning, but it's been worth it. <br />
            </div>

            <div className={styles.text}>
              What I'm most proud of is that I've invested my time and patience
              in learning these skills without any financial investment. I
              believe that my ability to learn and adapt quickly is one of my
              strongest attributes. <br />
            </div>

            <div className={styles.text}>
              Apart from programming, I have other interests too. I've also
              attempted defense competitive examinations, including UPSC-CDSE
              and AFCAT. I even made it to the conferencing stage of the 2-AFSB
              Mysore. These experiences have given me the confidence to face new
              challenges and opportunities head-on. <br />
            </div>

            <div className={styles.text}>
              As a self-taught developer, I'm looking for an opportunity to
              start my corporate journey and put my skills to the test with new
              challenges along the way. <br />
            </div>
          </div>
          <div className={styles.socialLinksContainer}>
           <Link href="https://www.linkedin.com/in/omkar-kudale/"> <div className={styles.linkedIn}><LinkedIn/></div> </Link>
           <Link href="https://www.github.com/codeomi"> <div className="github"><GitHub/></div> </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
