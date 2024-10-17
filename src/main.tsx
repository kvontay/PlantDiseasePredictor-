import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PlantDiseasePredictorApp from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlantDiseasePredictorApp />
  </StrictMode>
);