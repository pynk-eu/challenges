import "./App.css";
import AppHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}
