import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="background h-screen w-full flex flex-col overflow-x-hidden items-center relative">
      <h1 className="bg-white rounded-lg  text-center mt-[30px] w-11/12 px-10 py-2 text-2xl font-extrabold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center justify-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
