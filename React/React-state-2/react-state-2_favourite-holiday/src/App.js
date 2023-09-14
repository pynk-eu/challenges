import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Step 1 - Creating a state variable using "useState",
  // calling it "holiday" and assigning it a default value of "janmashtimi"
  const [holiday, setHoliday] = useState("janmashtimi");
  const [date, setDate] = useState("28-10-2013");

  function handleSubmit(event) {
    event.preventDefault();
    // Step 3 - Reassign the value of holiday by using the "setter" function
    // provided to us by the "useState" hook
    setHoliday(event.target.elements.holiday.value);
    setDate(event.target.elements.date.value);
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        {/* Step 2 - Use the "holiday" variable in our rendered p tag */}
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
