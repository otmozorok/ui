import React from 'react';
import ReactDOM from 'react-dom/client';
import { Avatar } from './components/index.ts';
import '../../../demo/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Avatar color="green">BH</Avatar>
      <Avatar color="blue" size={55}>
        BH
      </Avatar>
    </div>
  </React.StrictMode>
);
