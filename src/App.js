import "./App.css";
import Component2 from "./components/Component2";
import Logocomponent from "./components/Logocomponent";
import NavigatePathComponent from "./components/NavigatePathComponent";
import ExchangePointComponent from "./components/ExchangePointComponent";
import SampleComponent from "./components/SampleComponent";

function App() {
  const getLogocomponent = () => {
    let content = [];
    for (let i = 0; i < 7; i++) {
      content.push(<Logocomponent />);
    }

    return content;
  };

  return (
    <div className="App">
      <SampleComponent/>
      <Component2 />
      <div className="logo-component-container">{getLogocomponent()}</div>
      <NavigatePathComponent />
      <ExchangePointComponent />
    </div>
  );
}

export default App;
