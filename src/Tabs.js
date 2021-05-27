import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Вкладка 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Вкладка 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Вкладка 3
        </button>
        
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Вкладка 4
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, aliquam? Repellat tenetur rerum voluptatum deleniti unde aperiam totam nostrum commodi facilis, obcaecati repudiandae eaque voluptatem harum quaerat dolor nulla qui quis veritatis ratione sunt aliquam cupiditate beatae? Omnis similique autem rerum, quis laudantium eum atque ad incidunt nobis. Magni suscipit in libero ad accusamus provident ab, nostrum culpa porro. Enim minima blanditiis cupiditate vitae sit saepe expedita. Quidem, sed debitis?
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            i facilis, obcaecati repudiandae eaque voluptatem harum quaerat dolor nulla qui quis veritatis ratione sunt aliquam cupiditate beatae? Omnis similique autem rerum, quis laudantium eum atque ad incidunt nobis. Magni suscipit in libero ad accusamus provident ab, nostrum culpa porro. Enim minima blanditiis cupiditate vitae sit saepe expedita. Quidem, sed debitis?
          </p>
        </div>

      </div>
    </div>
  );
}

export default Tabs;