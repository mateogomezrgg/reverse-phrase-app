import { useState } from 'react';
import './TurnArroundWords.css';

export const TurnArroundWords = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const reversePhrase = () => {
    setResult(input.split('').reverse().join(''));
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((e) => {
        console.log('Error al copiar al portapapeles: ', e);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      reversePhrase();
    }
  };

  return (
    <div id='container'>
      <h2>Aaahhh, pero... ¿y si fuera al revés?</h2>
      <input
        id='form-phrase__input'
        type='text'
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Ingresa una frase'
      />
      <button id='form-phrase__button' onClick={reversePhrase}>
        Invertir
      </button>
      {result && (
        <div id='result-container' onClick={copyToClipboard}>
          <h2 id='div-result'>Frase Invertida: </h2>
          <p id='p-result'>{result}</p>
          <button id='div-result__btnCopy'>
            {copied ? (
              'Copiado!'
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm4-6V4z'
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
