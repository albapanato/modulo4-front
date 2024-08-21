import "./App.css";
import CondicionalTernario from "./components/CondicionalTernario";
import CondicionalVariables from "./components/CondicionalVariables";
import CondicionalAnd from "./components/CondicionalAnd";
import ListaPersonas from "./components/ListaPersonas";
import EstiloSimple from "./components/EstiloSimple";
import EstilosParrafo from "./components/EstilosParrafo";
import EstiloClases from "./components/EstiloClases";

function App() {
  return (
    <div className="App">
      <CondicionalTernario></CondicionalTernario>
      <CondicionalVariables></CondicionalVariables>
      <CondicionalAnd></CondicionalAnd>
      <ListaPersonas></ListaPersonas>
      <EstiloSimple></EstiloSimple>
      <EstilosParrafo></EstilosParrafo>
      <EstiloClases></EstiloClases>
    </div>
  );
}

export default App;
