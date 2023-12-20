import React from "react";

function Affiche(props) {
    // const nom = 'Adil'
    // const prenom = 'patrik'
    return <div>
        <p style={{ textAlign: "center" }}>Affichage</p>
        <h2 style={{ textAlign: 'center' }}> Le nom est:{props.nom},le prenom est:{props.prenom}</h2>
    </div>
}
// console.log(props)
export default Affiche;