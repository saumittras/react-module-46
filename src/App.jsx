import "./App.css";
// import SimpleForm from "./assets/Components/Form/SimpleForm";
// import StatefullForm from "./assets/Components/StatefullForm/StatefullForm";
import RefForm from "./assets/Components/RefForm/RefForm";

function App() {
  return (
    <div className="flex flex-col w-7/12 mx-auto justify-center items-center content-center">
      <h1 className="text-5xl text-green-500"> React Form </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      <RefForm></RefForm>
    </div>
  );
}

export default App;
