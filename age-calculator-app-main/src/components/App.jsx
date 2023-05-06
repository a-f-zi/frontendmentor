import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useState } from "react";
import arrow from "../../public/assets/images/icon-arrow.svg";

const Main = styled.article`
  background: var(--white);
  border-radius: 20px 20px 100px 20px;
  padding: 1.5rem;

  label {
    color: var(--smokeyGrey);
    font-size: 0.5rem;
    margin-bottom: 0.1rem;
  }

  input {
    width: 50px;
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid var(--lightGrey);
    font-weight: bold;

    &::placeholder {
      font-size: 0.8rem;
      font-weight: bold;
    }

    &:focus {
      outline: 1px solid var(--purple);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .date {
    display: flex;
    gap: 0.6rem;
  }

  .date-col {
    display: flex;
    flex-direction: column;
  }

  .separator {
    display: flex;
    align-items: center;
  }

  .line {
    width: 250px;
    height: 1px;
    background: var(--lightGrey);
    opacity: 0.5;
  }

  .arrow {
    background: var(--purple);
    width: 20px;
    border-radius: 50%;
    padding: 0.5rem;
    margin: 0.5rem 0 0;

    &:hover {
      background: var(--offBlack);
      cursor: pointer;
    }
  }

  .result {
    font-size: 2.2rem;
    font-weight: 800;
    font-style: italic;

    p {
      margin: 0;
    }

    span {
      color: var(--purple);
    }
  }

  .error {
    color: var(--lightRed);
  }

  .input-error {
    outline: 1px solid var(--lightRed);
  }

  .text-error {
    color: var(--lightRed);
    font-size: 0.4rem;
  }

  @media screen and (max-width: 270px) {
    .date {
      flex-direction: column;
    }

    .result {
      font-size: 1.5rem;
    }

    .separator {
      justify-content: center;
    }

    .line {
      width: 200px;
      position: absolute;
    }

    .arrow {
      z-index: 1;
      margin: 1rem;
    }
  }
`;

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [yearsDiff, setYearsDiff] = useState("--");
  const [monthsDiff, setMonthsDiff] = useState("--");
  const [daysDiff, setDaysDiff] = useState("--");
  const [showError, setShowError] = useState(false);
  const [showRequired, setShowRequired] = useState(false);
  const [showYearError, setShowYearError] = useState(false);
  const [showMonthError, setShowMonthError] = useState(false);
  const [showDayError, setShowDayError] = useState(false);

  let errorStyle = false;

  if (
    showError ||
    showRequired ||
    showYearError ||
    showMonthError ||
    showDayError
  ) {
    errorStyle = true;
  }

  const handleDayChange = (event) => {
    setDay(event.target.value);
    setShowError(false);
    setShowRequired(false);
    setShowDayError(false);
    setShowMonthError(false);
    setShowYearError(false);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setShowError(false);
    setShowRequired(false);
    setShowDayError(false);
    setShowMonthError(false);
    setShowYearError(false);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setShowError(false);
    setShowRequired(false);
    setShowDayError(false);
    setShowMonthError(false);
    setShowYearError(false);
  };

  const handleButtonClick = () => {
    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - inputDate.getTime());
    const yearsDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    const monthsDiff = Math.floor((timeDiff / (1000 * 3600 * 24 * 30.44)) % 12);
    const daysDiff = Math.floor((timeDiff / (1000 * 3600 * 24)) % 30.44);
    setYearsDiff(yearsDiff);
    setMonthsDiff(monthsDiff);
    setDaysDiff(daysDiff);

    if (day == "" || month == "" || year == "") {
      setShowRequired(true);
      return;
    }
    if (day > 31 || day < 1) {
      setShowDayError(true);
      return;
    }
    if (month > 12 || month < 1) {
      setShowMonthError(true);
      return;
    }
    if (inputDate > currentDate) {
      setShowYearError(true);
      return;
    }
    if (day < 1 || day > new Date(year, month, 0).getDate()) {
      setShowError(true);
      return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <div className="date">
          <div className="date-col">
            <label htmlFor="day" className={errorStyle && "error"}>
              DAY
            </label>
            <input
              type="number"
              name="day"
              value={day}
              onChange={handleDayChange}
              id="day"
              placeholder="DD"
              required
              className={errorStyle && "input-error"}
            />
            {showError && <p className="text-error">Must be a valid date</p>}
            {showRequired && (
              <p className="text-error">This field is required</p>
            )}
            {showDayError && <p className="text-error">Must be a valid day</p>}
          </div>
          <div className="date-col">
            <label htmlFor="month" className={errorStyle && "error"}>
              MONTH
            </label>
            <input
              type="number"
              name="month"
              value={month}
              onChange={handleMonthChange}
              id="month"
              placeholder="MM"
              required
              className={errorStyle && "input-error"}
            />
            {showRequired && (
              <p className="text-error">This field is required</p>
            )}
            {showMonthError && (
              <p className="text-error">Must be a valid month</p>
            )}
          </div>
          <div className="date-col">
            <label htmlFor="year" className={errorStyle && "error"}>
              YEAR
            </label>
            <input
              type="number"
              name="year"
              value={year}
              onChange={handleYearChange}
              id="year"
              placeholder="YYYY"
              required
              className={errorStyle && "input-error"}
            />
            {showRequired && (
              <p className="text-error">This field is required</p>
            )}
            {showYearError && <p className="text-error">Must be in the past</p>}
          </div>
        </div>

        <div className="separator">
          <div className="line"></div>
          <img
            src={arrow}
            alt="arrow icon"
            className="arrow"
            onClick={handleButtonClick}
          />
        </div>

        <div className="result">
          <div>
            <p>
              <span className="result-year">{yearsDiff} </span>years
            </p>
          </div>
          <div>
            <p>
              <span className="result-month">{monthsDiff} </span>months
            </p>
          </div>
          <div>
            <p>
              <span className="result-day">{daysDiff} </span>days
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}
