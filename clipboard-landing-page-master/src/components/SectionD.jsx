import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 4rem 2rem 6rem;

  @media screen and (min-width: 768px) {
    p {
      max-width: 600px;
    }

    button {
      width: 200px;
    }

    div {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default function SectionD() {
  return (
    <>
      <Section>
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>

        <div>
          <button>Download for iOS</button>
          <button className="blue">Download for Mac</button>
        </div>
      </Section>
    </>
  );
}
