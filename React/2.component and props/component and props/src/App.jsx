import "./App.css";
import Box from "./components/Box/box";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <section>
        <Box size="small" style={{ backgroundColor: "red" }} />
        <Box
          size="medium"
          style={{
            backgroundColor: "royalblue",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        />
        <Box size="large" style={{ backgroundColor: "yellow" }} />
      </section>
      <Footer />
    </>
  );
}

export default App;
