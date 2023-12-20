// import React from "react";
//     constructor() {
//         super();
//         this.state = { Message: 'Bienvenu visiteur', btnMessage: 'inscription' }
//     }
//     inscription = () =>
//         this.setState({ Message: 'Votre inscription est effectuée', btnMessage: 'Merci' })
//     render() {
//         return (
//             <div style={{ textAlign: "center", justifyContent: 'center' }}>
//                 <h4>{this.state.Message}</h4>
//                 <button onClick={this.inscription}>{this.state.btnMessage}</button>
//             </div>
//         )
//     }
// }
// constructor() {
//     super();

//     this.state = { nbre: 0 }
// }

// btnIncrementer = () => {
//     const newState = { nbre: this.state.nbre + 1 }
//     this.setState(newState)
// }

// btnDecrementer = () => {
//     const newState = { nbre: this.state.nbre - 1 }
//     this.setState(newState)
// }

// btnInitialiser = () => {
//     const old = { nbre: 0 }
//     this.setState(old)
// }


// render() {
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h3>{this.state.nbre}</h3>
//             <button onClick={this.btnIncrementer}>Incrementer</button>
//             <button onClick={this.btnInitialiser}>Initialiser</button>
//             <button onClick={this.btnDecrementer}>Decrementer</button>
//         </div>
//     )


// constructor(props) {
//     super(props);
//     this.state = { face: null, compteur: 0, end: false }

// }


// btnJouer = () => {
//     const tour = Math.floor(Math.random() * 6 + 1)

//     this.setState({ end: true, face: tour })

// }

// btnInit = () => {
//     const tour = Math.floor(Math.random() * 6 + 1)
//     if (tour === this.props.nombre) {
//         this.setState({ end: false, face: tour })
//     }

// }

// render() {
//     return (<div style={{ textAlign: "center" }}>
//         {this.state.face === null ?
//             <img src='images/face1.jpeg' /> :
//             <img src={`images/face${this.state.face}.jpeg`} />}
//         <h1>jeu de Dé</h1>
//         <p>face:</p>
//         <p>nombre d'essais:</p>
//         <button onClick={this.btnJouer}>jouer</button>
//         <button onClick={this.btnInit}>Initialiser</button>


//     </div>)
// }
// export default class jeuxDe extends React.Component {


// import React, { useState } from 'react';

// const DiceGame = () => {
//     const [diceValue, setDiceValue] = useState(1);

//     const rollDice = () => {
//         const newValue = Math.floor(Math.random() * 6) + 1;
//         setDiceValue(newValue);
//     };
//     const resign = () => {
//         // const oldValue = Math.floor(Math.random() * 6) + 1;
//         const oldValue = 1;
//         setDiceValue(oldValue);
//     }
//         return (
//             <div>
//                 <h1>Jeux de dé</h1>
//                 <p> Valeur du dé : {diceValue}</p>

//                 <button onClick={rollDice}>Lancer le dé</button>
//                 <button onClick={resign}>Initialiser le dé</button>

//             </div>

//         );
//     }


import React from "react";
// ChildComponent.jsx

const ChildComponent = (props) => {
    return (
        <div>
            <p>Nom: {props.name}</p>
            <p>Âge: {props.age}</p>
        </div>
    );
};

export default ChildComponent;







