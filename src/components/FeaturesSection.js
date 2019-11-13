import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import "./FeaturesSection.scss";
import bootcamp from '../assets/bootcamp.svg';
import cognito from '../assets/cognito.svg';
import resumeMaker from '../assets/resumeMaker.svg';
import scheduler from '../assets/scheduler.svg';

function FeaturesSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Cognito",
                body:
                  "A standardized placement portal for colleges.",
                image: cognito,
                href: "https://cognito.learning-sage.com"
              },
              {
                title: "Interview Scheduler",
                body:
                  "Our engine to schedule interviews during placements.",
                image: scheduler,
                href: "https://dev-autobot.learning-sage.com/https://dev-autobot.learning-sage.com/api"
              },
              {
                title: "Resume Maker",
                body:
                  "Make your resume in a flash.",
                image: resumeMaker,
                href: "https://zook.learning-sage.com"
              },
              {
                title: "Placements bootcamp",
                body:
                  "Our placement bootcamp services catering to awareness gaps in student placements.",
                image: bootcamp,
                href: "https://bootcamp.learning-sage.com"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
