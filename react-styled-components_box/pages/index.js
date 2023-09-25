import Box from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <Box isBlack={true} />
    </div>
  );
}
