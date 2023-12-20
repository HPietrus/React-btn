import react, { useState } from "react";

const RegiForm = () => {
    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'birthdate':
                setBirthdate(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'city':
                setCity(value);
                break;
            default:
                break;
        }
    };

    const validateForm = () => {
        if (username.trim() !== '' && birthdate.trim() !== '' && password.trim() !== '' && city.trim() !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulaire soumis ! Données :', { username, birthdate, password, city });
    };

    return (
        <div>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Identifiant:
                    <input type="text" name="username" value={username} onChange={handleInputChange} />
                </label>

                <br />
                <label>
                    Date de naissance:
                    <input type="date" name="birthdate" value={birthdate} onChange={handleInputChange} />
                </label>

                <br />
                <label>
                    Mot de passe:
                    <input type="password" name="password" value={password} onChange={handleInputChange} />
                </label>
                <br />
                {/* <input type="text" name="city" value={city} onChange={handleInputChange} /> */}



                <label for="ville">Choisissez une ville :
                    <select id="ville" name="ville">
                        <option value=">Rabat">Rabat</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Mohammédia">Mohammédia</option>

                    </select>
                    <label for='genre'>
                        <input type="radio">homme</input>
                    </label>

                </label>
                <br />
                <button onClick={validateForm} type="submit" style={{ backgroundColor: 'green' }}>
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default RegiForm;
