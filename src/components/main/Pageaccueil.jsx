import {Nav, NavLink} from "../header/NavbarElements";

function Pageaccueil(){
    return(
        <div className='App-conteneur'>
            <h1 className="App-titre">BIENVENUE AUX FINS GOURMETS</h1>
            <Nav className="App-bouton">
                <NavLink to="/Recipes" className="App-case">Nos Recettes</NavLink>
            </Nav>
        </div>
    ); 
}
export default Pageaccueil;