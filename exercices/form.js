import React, { useState } from "react";

export default function Form() {
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()
    const [afficher, setafficher] = useState(false)

    const btnNom = (e) => {
        const contenu = e.target.value
        setNom(contenu)
    }

    const bntprenom = (e) => {
        setPrenom(e.target.value)
    }

    const btnAfficher = (e) => {
        setafficher(true)
    }

    return (
        <div>
            <input type="text" name="Nom" id="Nom" onChange={btnNom} /><br />
            <input type="text" name="Prenom" id="Prenom" onChange={bntprenom} /><br />
            <button onClick={btnAfficher}>afficher</button>
            {
                (afficher === true) ?
                    <p> nom: {nom} prenom: {prenom}</p>
                    :
                    ''
            }

        </div>
    )
}