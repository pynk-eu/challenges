import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: " ",
    values: {
      altitude: 0,
      mountainRange: " ",
    },
  });

  function handleNameChange(event) {
    // console.log(event.target.value);
    updateMountain((draft) => {
      draft.name = event.target.value;
    });
    // console.log({ ...mountain, name: event.target.value });
  }

  function handleAltitudeChange(event) {
    // console.log(event.target.value);
    // setMountain({
    //   ...mountain,
    //   values: { ...mountain.values, altitude: event.target.value },
    // });
    updateMountain((draft) => {
      draft.values.altitude = event.target.value;
    });
  }

  function handleMountainRangeChange(event) {
    // setMountain({
    //   ...mountain,
    //   values: { ...mountain.values, mountainRange: event.target.value },
    // });
    updateMountain((draft) => {
      draft.values.mountainRange = event.target.value;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={mountain.name}
          onChange={() => handleNameChange(event)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={() => handleAltitudeChange(event)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={() => handleMountainRangeChange(event)}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
