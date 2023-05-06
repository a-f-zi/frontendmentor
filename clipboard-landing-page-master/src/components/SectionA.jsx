import styled from "styled-components";
import computer from "../../public/assets/image-computer.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1.5rem 2rem;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    margin: 2rem 0 3rem;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
    }

    aside {
      align-items: start;

      p {
        font-size: 0.7rem;
        margin: 0;
        margin-bottom: 2rem;
        text-align: left;
        padding-right: 10rem;
      }

      h2 {
        font-size: 1.3rem;
        margin: 0;
      }
    }

    img {
      margin: 0;
      position: relative;
      left: -5rem;
    }

    p {
      max-width: 600px;
    }
  }
`;

export default function SectionA() {
  return (
    <>
      <Section>
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div>
          <figure>
            <img src={computer} alt="image of a computer" />
          </figure>
          <aside>
            <h2>Quick Search</h2>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
            <h2>iCloud Sync</h2>
            <p>Instantly saves and syncs snippets across all your devices.</p>
            <h2>Complete History</h2>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
