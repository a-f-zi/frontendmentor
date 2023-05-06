import styled from "styled-components";
import logo from "../../public/assets/logo.svg";
import bgHeaderMobile from "../../public/assets/bg-header-mobile.png";
import bgHeaderDesktop from "../../public/assets/bg-header-desktop.png";

const Head = styled.header`
  background: url("${bgHeaderMobile}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 2rem;
  text-align: center;

  h1 {
    margin: 4rem 0 1rem;
  }

  @media screen and (min-width: 768px) {
    background: url("${bgHeaderDesktop}");
    background-size: cover;

    h1 {
      margin-top: 3rem;
    }

    p {
      width: 600px;
      margin-bottom: 2rem;
    }

    img {
      width: 100px;
    }

    div {
      display: flex;
      gap: 1rem;
    }

    button {
      width: 200px;
    }
  }
`;

export default function Header() {
  return (
    <>
      <Head>
        <img src={logo} alt="logo" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div>
          <button>Download for iOS</button>
          <button className="blue">Download for Mac</button>
        </div>
      </Head>
    </>
  );
}
