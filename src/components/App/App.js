import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Renders the entire app on the DOM
  // useEffect(() => { getDatGif() }, [])

  const [url , setUrl] = useState('');
  const getDatGif = () => {
    axios.get( '/random' ) 
      .then( response => {
        console.log( 'in app', response.data );
        setUrl( response.data );
      }).catch( err => {
        alert( 'you done goofed with the GET route' );
        console.log( err );
      })
  }

  

  return (

    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      <button onClick = {() => getDatGif()}>Gimme Dat Gif</button>
      <div>
        <iframe src = {url} ></iframe>
      </div>
    </div>
  );
}

export default App;
