import { Suspense } from "react";
import "./App.css";
import AiModels from "./components/AiModels/AiModels";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const modelPromise = fetchModels();
  return (
    <>
      <section id="center">
        <div>
          <NavBar></NavBar>
          <Banner></Banner>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <AiModels modelPromise={modelPromise}></AiModels>
          </Suspense>
          <Footer></Footer>
        </div>
      </section>
    </>
  );
}

export default App;
