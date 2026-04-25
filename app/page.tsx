'use client';

import { useState } from 'react';

export default function Page() {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState('');
  const [energy, setEnergy] = useState('');

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      
      {step === 0 && (
        <div>
          <h1>Resource App</h1>
          <p>Értsd meg az otthonod rendszerként</p>
          <button onClick={() => setStep(1)}>Kezdés</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>1. Méret</h2>
          <input
            placeholder="m²"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <br /><br />
          <button onClick={() => setStep(2)}>Tovább</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>2. Energiafogyasztás</h2>
          <input
            placeholder="kWh / év"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />
          <br /><br />
          <button onClick={() => setStep(3)}>Eredmény</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Eredmény</h2>
          <p>Otthon méret: {size} m²</p>
          <p>Fogyasztás: {energy} kWh/év</p>

          <h3>Javasolt rendszerek:</h3>
          <ul>
            <li>Napelem rendszer</li>
            <li>Hőszivattyú</li>
            <li>Esővíz gyűjtés</li>
          </ul>

          <button onClick={() => setStep(0)}>Újrakezdés</button>
        </div>
      )}

    </div>
  );
}
