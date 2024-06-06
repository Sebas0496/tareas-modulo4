import ComponenteTitu from "./Titulo";
import ComponenteImg from "./Imagen";
import ComponenteDeta from "./Details";



function CharacterCard({url,titulo, genero, estado}){
    return(
        <>
        <div className="Newcard">
            <ComponenteImg url={url}/>
            <div className="info">
                <ComponenteDeta estado={estado}/>
                <ComponenteTitu titulo={titulo}/>
                <ComponenteDeta genero={genero}/>
            </div>
                
        </div>
        </>
    )
}
export default CharacterCard