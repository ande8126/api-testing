import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Renders the entire app on the DOM
  // useEffect(() => { getDatGif() }, [])
  const [ array, setArray ] = useState([]);

  const randomizer = () => {
    return Math.floor(Math.random() * 10 );
  }

  const [url , setUrl] = useState('');
  const getDatGif = () => {
    axios.get( '/random' ) 
      .then( response => {
        setUrl( response.data.data[randomizer()].images.original.url );
        console.log('in app', response.data.data[0].images.original.url);
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
        <img src = {url} />
      </div>
    </div>
  );
}

export default App;
