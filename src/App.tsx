import { useState } from 'react'
import './App.css'

function Panel({ title, children }){
  const [isActive, setIsActive] = useState(false);

  return(
    <>
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (<button onClick={() => setIsActive(true)}>Afficher</button>)}
    </>
  );
}

function App() {

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="A propos">
        Avec une population d'environ 2 millions d'habitants, Almaty est la plus grande ville du Kazakhstan. Elle en était la capitale 1929 à 1997.
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymologie">
        Avec une population d'environ 2 millions d'habitants, Almaty est la plus grande ville du Kazakhstan. Elle en était la capitale 1929 à 1997.
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
    </>
  );
}

export default App
