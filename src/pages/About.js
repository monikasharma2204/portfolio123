import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>MONIKA SHARMA</span>
              </p>
              <div className="about__info">
                <PText>
                  I currently pursuing BSC from Banasthali Vidhyapith .I have
                  done my schooling from Prabha Gyan pith sr. Sec school. I have
                  deep intrest in web development.
                  <br /> <br />
                  Coding is also an art for me. I love it and now I have the
                  opportunity to design along with the coding. I find it really
                  interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                  Coming to my strength, i am quick lerner, a hard working and
                  self motivated persons.I have completed full stack web
                  development programs from coding shuttle with certification.
                  My short-term goal is to get a job in a reputed company where
                  I can improve my skills and experience.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['prabha gyan pith sr. sec school ,kota ']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Banasthali Vidhyapith,jaipur']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Mongo DB']}
              />
              <AboutInfoItem title="languages" items={['c', 'c++']} />
              <AboutInfoItem
                title="other skills"
                items={[
                  'oops',
                  'Data structures and algorithams',
                  'DBMS',
                  'Oracle SQL',
                ]}
              />
              <AboutInfoItem title="Design" items={['Figma', 'material Ui']} />
            </div>
            <div className="about__info__item"> </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
