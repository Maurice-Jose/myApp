import { useState } from 'react'
import './App.css'

function Panel({ title, children, isActive, onShow }){

  return(
    <>
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Afficher</button>)}
    </>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="A propos" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Avec une population d'environ 2 millions d'habitants, Almaty est la plus grande ville du Kazakhstan. Elle en était la capitale 1929 à 1997.
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymologie" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        Avec une population d'environ 2 millions d'habitants, Almaty est la plus grande ville du Kazakhstan. Elle en était la capitale 1929 à 1997.
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
    </>
  );
}

export default App
