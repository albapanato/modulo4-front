// import Contacto from './components/Contacto';
// import Registro from './components/Registro';
// import Mensaje from './components/Mensaje';
import PeopleList from "./components/PeopleList";
import PeticionesFetch from "./components/PeticionesFetch";
import DataPost from "./components/DataPost";
import DataUpdate from "./components/DataUpdate";
import DataDelete from "./components/DataDelete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataPost></DataPost>
      <DataUpdate></DataUpdate>
      <DataDelete></DataDelete>
      {/* <Contacto></Contacto>
      <Registro></Registro>
      <Mensaje></Mensaje> */}
      <PeopleList></PeopleList>
      <PeticionesFetch></PeticionesFetch>
    </div>
  );
}

export default App;
