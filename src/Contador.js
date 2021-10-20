import React, { useState } from 'react';

export const Contador = () => {
    const [valor, setNumber] = useState(0);
    return (
        <div>
            <div>
                <h2>Contador: {valor}</h2>
            </div>
            <div>
                <button onClick={() => {
                    setNumber(valor + 5)
                    }}>Somar</button>

                <button onClick={() => {
                    setNumber(valor - 3)
                    }}>Subtrair</button>
            </div>
        </div>
    );
}