import { useState, useEffect } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import './App.css'
import Monsters from './Monsters.jsx'
import Creatures from './Creatures.jsx'
import Materials from './Materials.jsx'

function App() {

  const [monster, setMonster] = useState([])
  const [creature, setCreature] = useState([])
  const [material, setMaterial] = useState([])
  const [equipment, setEquipment] = useState([])
  const [treasure, setTreasure] = useState([])

  useEffect(() => {
      fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
        .then(res => res.json())
        .then(data => {
          setMonster(data.data)
        })
    }, [])

  useEffect(() => {
      fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures')
        .then(res => res.json())
        .then(data => {
          setCreature(data.data)
        })
    }, [])  

  useEffect(() => {
      fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials')
        .then(res => res.json())
        .then(data => {
          setMaterial(data.data)
        })
    }, [])  


  return (
    <>

      <div className="home-header">
          <Link to="/">
            <Button variant="outlined">HOME PAGE</Button>
          </Link>
          <Link to="/monsters">
            <Button variant="outlined">Monsters</Button>
          </Link>
          <Link to="/creatures">
            <Button variant="outlined">Creatures</Button>
          </Link>
          <Link to="/materials">
            <Button variant="outlined">Materials</Button>
          </Link>
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
      </Routes>

    </>
  )
}

export default App
