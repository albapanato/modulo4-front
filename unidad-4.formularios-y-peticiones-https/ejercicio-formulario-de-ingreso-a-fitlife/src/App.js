import "./App.css";
import Formulario from "./components/Formulario";
import ActividadesGim from "./components/ActividadesGim";
import PlanEjercicios from "./components/PlanEjercicios";

function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
      <ActividadesGim></ActividadesGim>
      <PlanEjercicios></PlanEjercicios>
    </div>
  );
}

export default App;
