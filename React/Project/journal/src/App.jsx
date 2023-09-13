import "./App.css";
import AppHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import EntrySection from "./Components/EntrySection/EntrySection";

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Form />
        <EntrySection />
      </main>
      <Footer />
    </>
  );
}
