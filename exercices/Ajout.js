import React, { useState } from 'react';
const AddArticle = () => {
    const [id, setId] = useState('');
    const [prix, setPrix] = useState('[]');
    const [designation, setDesignation] = useState('');

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleDesignationChange = (event) => {
        setDesignation(event.target.value);
    };

    const handlePrixChange = (event) => {
        setPrix(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPrix = { id, designation, };
        setPrix([...prix, newPrix]);
        setId('');
        setDesignation('');
    };

    return (
        <div>
            <h2>Ajouter un article</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Id:
                    <input type="text" value={id} onChange={handleIdChange} />

                </label>
                <br />
                <label>
                    prix:
                    <input value={prix} onChange={handlePrixChange} />
                    <br />
                </label>
                <label>
                    designation:
                    <input value={designation} onChange={handleDesignationChange} />
                </label>
                <br />
                <button type="submit">Ajouter</button>
            </form>
            <h2>Articles ajoutés :</h2>

            <li>
                {prix.map((prix, index) => (
                    <li key={index}>
                        <h3>{prix.id}</h3>
                        <p>{prix.designation}</p>
                    </li>
                ))}
            </li>
        </div>
    );
};

export default AddArticle;
