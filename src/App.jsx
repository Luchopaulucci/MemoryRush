import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-screen flex justify-center items-center flex-col p-2">
      <Title />
      <Card />
    </div>
  );
}

export default App;
