import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

const App = () => {
  
  const path = window.location.pathname.split('/').pop();
  
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col p-2 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <Navbar />
      <Title title={path}/>
      <Card matter={path}/>
    </div>
  );
}

export default App;
