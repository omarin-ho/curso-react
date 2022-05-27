export default function Persons(props){
    const {persons} = props;
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">Volver al Home</span>
            <div className="container-characters">
                {persons.map((person, index)=>(
                    <div className="character-container" key={index}>
                        <div>
                            <img src={person.image} alt={person.name}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}