import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MetricSelector from './components/MetricSelector.js'
import CoreAssembly from './components/CoreAssembly.js'


function App() {

  const [selectedMetric, setSelectedMetric] = useState("temperature")

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <MetricSelector
        selectedMetric={selectedMetric}
        setSelectedMetric={setSelectedMetric}
      />
      <CoreAssembly
        selectedMetric={selectedMetric}
      />
      <Footer></Footer>
    </>
  )
}

export default App
