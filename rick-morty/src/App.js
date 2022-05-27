import logo from './img/rick-morty.png';
import './App.css';
import axios from 'axios';
import {useState} from "react";
import Persons from "./components/Persons";

function App() {
    /**
     * Hook para almacenar los datos que retorna el servicio
     * @author Omar
     */
    const [persons, setPersons] = useState(null);
    /**
     * Constante - Funcion que escucha el boton para peticion api
     * @author Omar
     */
    const reqApi = async ()=>{
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                const persons = res.data;
                setPersons(persons.results);
            });
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header">
            Rick & Morty
            {persons ?(
                <Persons persons={persons}></Persons>
            ):
                <>
                    <img src={logo} alt="Rick & Morty" className="img-home"/>
                    <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
                </>
            }
        </h1>
      </header>
    </div>
  );
}

export default App;
