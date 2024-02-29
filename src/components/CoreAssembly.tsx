import CoreTile from './CoreTile'
import assemblyData from '../assemblyData.js'

const CoreAssembly = () => {
  return (
    <main>
      {assemblyData.map((core) => (
        <CoreTile
          key={core.id}
          coreData={core}
        />
      ))}
    </main>

  )
}

export default CoreAssembly