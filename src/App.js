import React, { useState } from 'react';

let artists = [
  {name:"Duo Brothers", favoriteSong:"Dopefully", huenique:"brown"},
  {name: "War on Drugs", favoriteSong:"Red Eyes", huenique:"purple"},  
  {name:"DJ Seinfeld",  favoriteSong:"She Loves Me", huenique:"pink"}, 
  {name:"Steely Dan", favoriteSong:"Aja",  huenique:"blue"},  
  {name:"Chance the Rapper",  favoriteSong:"Acid Rain", huenique:"red"}
];

function App() {
  
  let [artistOfDay, setArtistOfDay] = useState(artists[1]);
  
  return (
    <div >
      <p style={{color: artistOfDay.huenique}}>My favorite song today is: {setArtistOfDay.name}</p>
      <ListComponent setArtistOfDay={setArtistOfDay} artists={artists}> </ListComponent>
      hello world! 
    </div>
  );
}

function ListComponent({artists, setArtistOfDay}) { 
    return (
      <ul>
          {artists.map((artist) => <ArtistItemComponent setArtistOfDay={setArtistOfDay} artist={artist}></ArtistItemComponent>)}
      </ul>
    )
  }


function ArtistItemComponent({artist, setArtistOfDay}) { 
    return (
      <li onClick={() => setArtistOfDay(artist)} style={{color: artist.huenique}}>{artist.name}</li>
    )
  }


export default App;
