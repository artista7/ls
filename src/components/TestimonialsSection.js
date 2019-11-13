import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              avatar: "https://gravatar.com/avatar/20e775b7c1e8a09f06617011454f65eb?s=400&d=retro&r=x",
              name: "Aman Jindal",
              quote:
                "I was confused about which profile I should choose as many a times profiles can be misleading if you don't know much about them. After the session I could make a informed choice.",
              company: "Student, IITD"
            }
            ,
            {
              avatar: "https://gravatar.com/avatar/cc98d3416c85094e162b044a704eca25?s=400&d=retro&r=x",
              name: "Ravi Ranjan",
              quote:
                "One of the best resume making portal I have come across.",
              company: "Student, IIM A"
            },
            {
              avatar: "https://gravatar.com/avatar/3e99da702fdb66f84633fc5b8c1978dc?s=400&d=identicon&r=x",
              name: "Durgesh Yadav",
              quote:
                "If our college had placement portal like cognito, I certainly would have done better in my placements.",
              company: "Student, IITD"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TestimonialsSection;
