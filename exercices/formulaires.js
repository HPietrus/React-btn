import React, { useState } from "react";
const RegiForm = () => {
    const [nom, setNom] = useState('');
    const handleChange = (event) => {
        setNom(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('Le nom à été soumis: ' + nom)
        event.preventDnpmefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input type="text" name="nom" value={nom} onChange={handleChange} />
            </label>
            <input type="submit" value='Envoyer' />

        </form>
    )
}
export default RegiForm;