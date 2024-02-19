import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { Text, TechStack } from "./styles";
import { Spacer } from "@components/Spacer";
import { spacing } from "@constants/theme";

const logoWidth = 90;
const logoHeight = 95;

export const About = () => (
  <Container variant="secondary" id="about">
    <Title>
      <PrimaryText>About</PrimaryText> Me
    </Title>

    <Spacer desktopY={spacing.s8} mobileY={spacing.s4} />

    <Text>
      From design and development to testing and deployment, I have built many
      high end applications from scratch and updated existing apps to keep up
      with modern design trends.
    </Text>
    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />
    <Text>
      During my career I have solved numerous problems using semantic HTML, CSS
      and JavaScript (to name a few) along with the relevant frameworks and
      supporting technologies.
    </Text>

    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />

    <TechStack>
      <img
        src="/tech-stack/HTML5.png"
        alt="HTML5"
        width={logoWidth}
        height={logoHeight}
      />
      <img
        src="/tech-stack/CSS3.png"
        alt="CSS3"
        width={logoWidth}
        height={logoHeight}
      />
      <img
        src="/tech-stack/javascript.png"
        alt="JavaScript"
        width={logoWidth}
        height={logoHeight}
      />
      <img
        src="/tech-stack/typescript.png"
        alt="TypeScript"
        width={logoWidth}
        height={logoHeight}
      />
      <img
        src="/tech-stack/react.png"
        alt="React JS"
        width={logoWidth}
        height={logoHeight}
      />
      <img
        src="/tech-stack/next.png"
        alt="Next JS"
        width={logoWidth}
        height={logoHeight}
      />
    </TechStack>

    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />

    <Text>
      I leverage my skills in UX & UI design to build user-centric interfaces
      that prioritise usability and accessibility so that applications are
      intuitive to navigate and usable for people of all abilities.
    </Text>
    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />
    <Text>
      Taking pride in my attention to detail, I ensure that every element is
      pixel-perfect and all code is optimised for performance as I believe that
      speed and efficiency are paramount in today's digital landscape.
    </Text>
    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />
    <Text>
      I have had the opportunity to work on a diverse array of projects ranging
      from simple marketing websites to intricate full-stack applications with
      companies across various sectors, including health-tech, e-commerce and
      finance.
    </Text>
    <Spacer desktopY={spacing.s6} mobileY={spacing.s3} />
    <Text>
      From completing solo projects to collaborating on large-scale endeavours
      involving cross-functional teams of ten or more, I am able to thrive in
      dynamic & fast-paced environments whether independently or as part of a
      team.
    </Text>
  </Container>
);
