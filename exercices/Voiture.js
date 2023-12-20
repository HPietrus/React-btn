import React from "react";

function Voiture() {

    const myVoiture = { matricule: '1983X9', marque: 'Toyota', chevaux: 8 }
    return (
        <div classe='contenu' style={{
            textAlign: 'center',
        }}>
            <h1 style={{ color: 'green' }}>Information Voiture</h1>
            <h4> voiture matricule:<span style={{ color: 'red' }}>1983X9</span> </h4>
            <h5>marque:Toyota nombre de chevaux:8</h5>
        </div>
    );
}

export default Voiture;