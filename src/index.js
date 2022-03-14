import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BoardApp from './App'



const renderReactDom = () => {
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  ReactDOM.render(
    <React.StrictMode>
      <BoardApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    alert('estamos en el device ready')
  }, false);
} else {
  renderReactDom();
  alert('NO estamos en el device ready')
}

function onSuccess(position) {
  alert('Latitude: ' + position.coords.latitude + '\n' +
    'Longitude: ' + position.coords.longitude + '\n' +
    'Altitude: ' + position.coords.altitude + '\n' +
    'Accuracy: ' + position.coords.accuracy + '\n' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    'Heading: ' + position.coords.heading + '\n' +
    'Speed: ' + position.coords.speed + '\n' +
    'Timestamp: ' + position.timestamp + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
}


/* document.addEventListener('deviceready', onDeviceReady, false);

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  
  //document.getElementById('deviceready').classList.add('ready');
  renderReactDom();
}
renderReactDom(); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
