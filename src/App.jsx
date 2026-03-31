import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <NavBar></NavBar>
          <Banner></Banner>
          <Footer></Footer>
        </div>
      </section>
    </>
  );
}

export default App;
