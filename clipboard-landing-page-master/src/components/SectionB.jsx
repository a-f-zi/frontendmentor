import styled from "styled-components";
import imageDevice from "../../public/assets/image-devices.png";
import blacklist from "../../public/assets/icon-blacklist.svg";
import iconText from "../../public/assets/icon-text.svg";
import iconPreview from "../../public/assets/icon-preview.svg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1.5rem 2rem;

  img {
    width: 100%;
    margin-bottom: 4rem;
  }

  .icon {
    width: 50px;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .sub-heading {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    p {
      max-width: 600px;
      font-size: 0.8rem;
    }

    img {
      width: 750px;
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      max-width: 800px;

      div {
        flex-basis: 300px;
      }
    }
  }
`;

export default function SectionB() {
  return (
    <>
      <Section>
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={imageDevice} alt="image of a laptop and a smartphone" />
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
        <section className="list">
          <div>
            <img src={blacklist} alt="blacklist icon" className="icon" />
            <h2 className="sub-heading">Create blacklists</h2>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>

          <div>
            <img src={iconText} alt="text icon" className="icon" />
            <h2 className="sub-heading">Plain text snippets</h2>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          <div>
            <img src={iconPreview} alt="preview icon" className="icon" />
            <h2 className="sub-heading">Sneak preview</h2>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </section>
      </Section>
    </>
  );
}
