export default function Caracter(props) {
  const { characters, setCaracter } = props;

  const resetearDatos = () => {
    setCaracter(null);
    }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetearDatos}>Volver a la Home</span>
      <div className="container-characters">
        {characters.map((caracter, index) => (
          <div key={index} className="characters">
            <div>
              <img src={caracter.image} alt={caracter.name} />
            </div>
            <div>
              <h3>{caracter.name}</h3>
              <h6>
                Estatus:{" "}
                {caracter.status === "Alive" ? (
                  <>
                    <span className="Alive">Alive</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Dead</span>
                  </>
                )}
              </h6>
              <h6>
                <span className="text-gray">Episodios: </span>
                <span> {caracter.episode.length}</span>
              </h6>
              <h6>
                <span className="text-gray">Especie: </span>
                <span> {caracter.species}</span>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={setCaracter}>Volver a la Home</span>

    </div>
  );
}
