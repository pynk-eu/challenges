import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";



export default function App({ Component, pageProps }) {
  const lightState = [
    { id: 0, name: "Living Room", isOn: true },
    { id: 1, name: "Kitchen", isOn: true },
    { id: 2, name: "Bedroom", isOn: true },
    { id: 3, name: "Bathroom", isOn: true },
    { id: 4, name: "Garage", isOn: true },
    { id: 5, name: "Porch", isOn: true },
    { id: 6, name: "Garden", isOn: true },
    { id: 7, name: "Office", isOn: true },
  ];
  const [lights, setLights] = useState(lightState);
  return (
    <Layout >
      <GlobalStyle />
      <Component {...pageProps} lights={lights}/>
    </Layout>
  );
}
