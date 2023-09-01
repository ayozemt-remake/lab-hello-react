import logo from "./images/logo.png";
import menu from "./images/menu.png";
import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <img src={menu} alt="menu" className="menu" />
      <div className="header">
        <h1>
          Say hello to <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
          <br />
        </p>
        <button className="btn">Awesome!</button>
      </div>
      <div className="feats">
        <div className="feat">
          <img src={icon1} alt="icon1" className="icon" />
          <h3>Declarative</h3>
          <p className="description">
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div className="feat">
          <img src={icon2} alt="icon2" className="icon" />
          <h3>Components</h3>
          <p className="description">
            Build encapsulated <br />
            components that <br />
            manage their state.
          </p>
        </div>
        <div className="feat">
          <img src={icon3} alt="icon3" className="icon" />
          <h3>Single-Way</h3>
          <p className="description">
            A set of immutable <br />
            values are passed to <br />
            the component's.
          </p>
        </div>
        <div className="feat">
          <img src={icon4} alt="icon4" className="icon" />
          <h3>JSX</h3>
          <p className="description">
            Statically-typed, <br />
            designed to run on <br />
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
