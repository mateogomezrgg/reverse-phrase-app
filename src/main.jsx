import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TurnArroundWords } from './components/TurnArroundWords.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TurnArroundWords />
  </StrictMode>
);
