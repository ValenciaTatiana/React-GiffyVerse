import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'

import { AniGif } from './AniGif';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AniGif />
  </StrictMode>,
)