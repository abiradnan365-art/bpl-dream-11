import Nav from './components/Nav'
import './App.css'
import Banner from './components/Banner'
import { Suspense, useState } from 'react';
import Players from './components/Players/Players';

import type { Iplayer } from './type/PlayerType';

const playerFetch = async(): Promise<Iplayer[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}
 
function App() {

//  const playerPromise = playerFetch()
const [playerPromise] = useState(()=> playerFetch())

 const [coin, setCoin] = useState(3000);
 
  return (
    <>
  <Nav coin = {coin}></Nav>
  <Banner></Banner>

    <Suspense fallback={<h2>Loading....</h2>}>
      <Players playerPromise={playerPromise} coin = {coin} setCoin = {setCoin}></Players>
    </Suspense>

    </>
  )
}

export default App
