import React from "react";
function Ets() {
    const elts = [
        { nom: 'allaoui', prenom: 'rachid', note: 16.5 },
        { nom: 'ousamane', prenom: 'Dialo', note: 14 },
        { nom: 'henry', prenom: 'toureg', note: 18.5 },
    ];

    return (
        <div>
            <table>
                <tr>
                    <th> Nom</th>
                    <th>Prenom</th>
                    <th>Note</th>
                </tr>
                {
                    elts.map(et => <tr><td>{et.nom}</td><td>{et.prenom}</td><td>{et.note}</td></tr>)
                }
            </table>
        </div>
    );
}

export default Ets;
