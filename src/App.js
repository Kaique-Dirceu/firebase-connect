import React, { useEffect, useState } from 'react';

import { firebase, database } from './services/firebase';



function App() {
  const [humidity, setHumidity] = useState(0)
  const [temperature, setTemperature] = useState(0)

  useEffect(() => {
    const roomRef = database.ref(`FirebaseIOT`);
    const humidityRef = database.ref(`FirebaseIOT/humidity`);
    const temperatureRef = database.ref(`FirebaseIOT/temperature`);


    // roomRef.on('value', room => {
    //   const databaseRoom = room.val();
    //   console.log(databaseRoom)
    //   //setValores(databaseRoom)
    // })

    humidityRef.on('value', humidity => {
      const humidityValue = humidity.val();
      // console.log(humidityValue)
      setHumidity(humidityValue)
    })

    temperatureRef.on('value', temperature => {
      const temperatureValue = temperature.val();
      // console.log(temperatureValue)
      setTemperature(temperatureValue)
    })
  }, [])

  return (
    <>
      <h1>Loading...</h1>
      <h2> Humidade: {humidity}</h2>
      <h2> Temperatura: {temperature}</h2>
    </>
  );
}

export default App;


/*
const dbRef = firebase.database().ref();
dbRef.child("users").child(userId).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


  const humidityRef = database.ref('FirebaseIOT')

  const firebaseInt = humidityRef.get('humidity')

  console.log(firebaseInt)

*/