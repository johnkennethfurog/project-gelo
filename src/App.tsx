import SnowwyBackground from "./components/snowwy-background";
import Form from "./components/form";
import SnowwyVillage from "./components/snowwy-village";

import "./App.css";

function App() {
  return (
    <SnowwyBackground>
      <Form email="juan@gmail.com" />
    </SnowwyBackground>
  );
}

export default App;
