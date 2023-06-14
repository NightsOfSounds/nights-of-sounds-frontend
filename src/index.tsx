import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function render() {
    const root = document.getElementById('root');
    if(!root) return;
    
    ReactDOMClient.createRoot(
        root
    ).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

if(window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister();
            }
        });
}

if ('caches' in window) {
    caches.keys()
        .then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                return caches.delete(key);
            }));
        })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
