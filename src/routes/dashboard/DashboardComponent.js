import React from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0
    }
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none"
    }
  },
  todayTrends: {
    marginTop: 30
  },
  lastRow: {
    marginTop: 30
  },
  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0
    }
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30
    }
  }
});

var watchId;

function probarGeo(){
  if(window.cordova){
    if(window.cordova.plugins){
      watchId = navigator.geolocation.watchPosition(onSuccessPosition,onErrorPosition, { timeout: 30000 });
    }else{
      alert("no window.cordova.plugins")
    }
  }else{
    alert("no window.cordova")
  }  
}

function onSuccessPosition(position) {
  var element = document.getElementById('geolocation');
  element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                      'Longitude: ' + position.coords.longitude     + '<br />' +
                      '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onErrorPosition(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


function DashboardComponent() {
  const classes = useStyles();
  return (
    <>
    <button onClick={()=>navigator.geolocation.clearWatch(watchId)}>parar gps</button>
    <button onClick={()=>{
      if(window.cordova){
        if(window.cordova.plugins){
          try{
            probarGeo();
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
    <div id="geolocation"></div>
    </>
  );
}

export default DashboardComponent;
