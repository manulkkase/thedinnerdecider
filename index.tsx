import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 1. 이 줄을 추가합니다.
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* 2. <BrowserRouter> 바깥을 감싸줍니다. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider> {/* 3. 닫아줍니다. */}
  </React.StrictMode>
);