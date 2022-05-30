export default function Persons(props){
    const {persons, setPersons} = props;
    /**
     * Esta es una funcion
     */
    const resetPersons = () => {
        setPersons(null);
    };
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetPersons}>Volver al Home</span>
            <div className="container-characters">
                {persons.map((person, index)=>(
                    <div className="character-container" key={index}>
                        <div>
                            <img src={person.image} alt={person.name}/>
                        </div>
                        <div>
                            <h3>{person.name}</h3>
                            <h6>{person.status}</h6>
                            <p className="text-grey">
                                <span>Episodios: </span>
                                <span>{person.episode.length}</span>
                            </p>
                            <p className="text-grey">
                                <span>Especie: </span>
                                <span>{person.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetPersons}>Volver al Home</span>
        </div>
    );
}