import styled from "styled-components";
import google from "../../public/assets/logo-google.png";
import ibm from "../../public/assets/logo-ibm.png";
import microsoft from "../../public/assets/logo-microsoft.png";
import hp from "../../public/assets/logo-hp.png";
import vector from "../../public/assets/logo-vector-graphics.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 2rem 6r img {
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export default function SectionC() {
  return (
    <>
      <Section>
        <img src={google} alt="google logo" />
        <img src={ibm} alt="ibm logo" />
        <img src={microsoft} alt="microsoft logo" />
        <img src={hp} alt="hp logo" />
        <img src={vector} alt="vector graphics logo" />
      </Section>
    </>
  );
}
