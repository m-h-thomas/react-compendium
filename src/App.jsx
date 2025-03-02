import { useState, useEffect } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import './App.css'
import Monsters from './Monsters.jsx'
import Creatures from './Creatures.jsx'
import Materials from './Materials.jsx'
import Equipment from './Equipment.jsx'
import Treasure from './Treasure.jsx'

function App() {

  const [monster, setMonster] = useState([])
  const [creature, setCreature] = useState([])
  const [material, setMaterial] = useState([])
  const [equipment, setEquipment] = useState([])
  const [treasure, setTreasure] = useState([])


  //API Endpoints
  
  let monsterFetch = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters'
  let creatureFetch = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures'
  let materialFetch = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials'
  let equipmentFetch = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment'
  let treasureFetch = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure'

  useEffect(() => {
      fetch(monsterFetch)
        .then(res => res.json())
        .then(data => {
          setMonster(data.data)
        })
    }, [])

  useEffect(() => {
      fetch(creatureFetch)
        .then(res => res.json())
        .then(data => {
          setCreature(data.data)
        })
    }, [])  

  useEffect(() => {
      fetch(materialFetch)
        .then(res => res.json())
        .then(data => {
          setMaterial(data.data)
        })
    }, [])
    
  useEffect(() => {
      fetch(equipmentFetch)
        .then(res => res.json())
        .then(data => {
          setEquipment(data.data)
        })
    }, [])

  useEffect(() => {
      fetch(treasureFetch)
        .then(res => res.json())
        .then(data => {
          setTreasure(data.data)
        })
    }, [])


  return (
    <>

      <div className="home-header">
          <Link to="/">
            <button className="navButton" id="homeButton">HOME</button>
          </Link>
            <div className="nav-buttons">
              <Link to="/monsters">
                <button className="navButton">MONSTERS</button>
              </Link>
              <Link to="/creatures">
                <button className="navButton">CREATURES</button>
              </Link>
              <Link to="/materials">
                <button className="navButton">MATERIALS</button>
              </Link>
              <Link to="/equipment">
                <button className="navButton">EQUIPMENT</button>
              </Link>
              <Link to="/treasure">
                <button className="navButton">TREASURE</button>
              </Link>
            </div>
      </div>

      <Routes>
        <Route path='/' element={
          <>
          <h1>The Legend of Zelda: Breath of the Wild Compendium</h1>
          <img src="/images/link_logo.png" alt="Link"
          style={{width: 200}}/>
          </>
        
        }/>
        <Route path='/monsters' element={<Monsters monster={monster} />} />
        <Route path='/creatures' element={<Creatures creature={creature} />} />
        <Route path='/materials' element={<Materials material={material} />} />
        <Route path='/equipment' element={<Equipment equipment={equipment} />} />
        <Route path='/treasure' element={<Treasure treasure={treasure} />} />
      </Routes>

    </>
  )
}

export default App
