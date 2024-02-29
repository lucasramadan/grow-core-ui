import './App.css'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MetricSelector from './components/MetricSelector.js'
import CoreAssembly from './components/CoreAssembly.js'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <MetricSelector/>
      <CoreAssembly></CoreAssembly>
      <Footer></Footer>
    </>
  )
}

export default App
