import styled from "styled-components";
import logo from "../../public/assets/logo.svg";
import facebook from "../../public/assets/icon-facebook.svg";
import twitter from "../../public/assets/icon-twitter.svg";
import instagram from "../../public/assets/icon-gram.svg";

const FooterComponent = styled.footer`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  img {
    width: 50px;
    margin-bottom: 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: var(--darkGrayishBlue);

      &:hover {
        color: var(--strongCyan);
        pointer: cursor;
      }
    }
  }

  .image-list {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
      width: 24px;

      &:hover {
        cursor: pointer;
        filter: invert(55%) sepia(60%) saturate(458%) hue-rotate(122deg)
          brightness(97%) contrast(101%);
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    img {
      margin: 0;
    }

    nav {
      flex-direction: row;
      flex-wrap: wrap;

      a {
      }
    }

    .image-list {
      margin: 0;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterComponent>
        <img src={logo} alt="logo" />
        <nav>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Press Kit</a>
          <a href="#">Install Guide</a>
        </nav>
        <div className="image-list">
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={instagram} alt="instagram icon" />
        </div>
      </FooterComponent>
    </>
  );
}
