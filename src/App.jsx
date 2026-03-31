import { Suspense, useState } from "react";
import "./App.css";
import AiModels from "./components/AiModels/AiModels";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Carts from "./components/Carts/Carts";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const modelPromise = fetchModels();
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  console.log(carts);
  // console.log(activeTab);
  return (
    <>
      <section id="center">
        <div>
          <NavBar></NavBar>
          <Banner></Banner>
          <div className="tabs tabs-box justify-center bg-transparent shadow-none">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-40"
              aria-label="Models"
              onClick={() => setActiveTab("model")}
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-40"
              aria-label="Cart"
              onClick={() => setActiveTab("cart")}
            />
          </div>
          {activeTab === "model" && (
            <Suspense
              fallback={
                <span className="loading loading-spinner loading-lg"></span>
              }
            >
              <AiModels
                modelPromise={modelPromise}
                carts={carts}
                setCarts={setCarts}
              ></AiModels>
            </Suspense>
          )}
          {activeTab === "cart" && <Carts carts={carts}></Carts>}
          <Footer></Footer>
        </div>
      </section>
    </>
  );
}

export default App;
