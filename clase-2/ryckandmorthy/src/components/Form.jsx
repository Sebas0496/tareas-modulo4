import React, { useEffect,useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccees] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setSuccees('');
        if (!username || !password) return setError("Los dos campos son obligatorios");
        if (username.length < 8) return setError("El usuario debe tener más de ocho caracteres");
        setError(''); 
        setSuccees('Se enviaron los datos')
    };

    return (
        <div>
            <p>Inicio de sesión</p>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Nombre:</label>
                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <button type='submit'>Iniciar Sesión</button>

                {error &&(
                <p style={{color:'red', padding: '1rem', background:'#ccc', borderRadius: '1rem'}}>{error}</p>
                )}

                {success &&(
                    <p style={{padding: '1rem', background:'green', borderRadius: '1rem'}}>{success}</p>
                )}
            </form>
        </div>
    );
};

export default Form;
