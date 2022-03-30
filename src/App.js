import "./styles.css";
import React from "react";


function onSuccesPosition(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onErrorPosition(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

export default function App() {

  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Ancora S.L.</h1>
          <div className="nav"></div>
        </div>

        <div className="body">
        <button onClick={()=>{
      if(window.cordova){
        if(window.cordova.plugins){
          try{
            navigator.geolocation.getCurrentPosition(onSuccesPosition,onErrorPosition);
            alert("si window.cordova.plugins")
          }catch(error){
            alert(error)
          }


        }else{
          alert("no window.cordova.plugins")
        }
      }else{
        alert("no window.cordova")
      }  
    }}>probar gps</button>
        </div>
      </div>
    </>
  );
}
