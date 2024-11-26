import "./App.css";
import Card from "./components/Card";
/* import Navbar from "./components/Navbar"; */
import Title from "./components/Title";

const App = () => {
  
  return (
    <div className="w-full flex justify-center items-center p-2 text-white">
      {/* <Navbar /> */}
      <div className="">
        <Title title={"Diseño"}/>
      <Card matter={"Diseño"}/>
      </div>
    </div>
  );
}

export default App;
