import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MetricSelector from './components/MetricSelector.js'
import CoreAssembly from './components/CoreAssembly.js'

// This needs to be passed down to multiple components
import assemblyData from './assemblyData.js'

function App() {

  const [selectedMetric, setSelectedMetric] = useState("temperature")
  const [selectedCore, setSelectedCore] = useState("")

  return (
    <>
      <NavBar></NavBar>
      <Header
        assemblyData={assemblyData}
      />
      <MetricSelector
        selectedMetric={selectedMetric}
        setSelectedMetric={setSelectedMetric}
      />
      <CoreAssembly
        assemblyData={assemblyData}
        selectedMetric={selectedMetric}
        selectedCore={selectedCore}
        setSelectedCore={setSelectedCore}
      />
      <Footer></Footer>
    </>
  )
}

export default App
