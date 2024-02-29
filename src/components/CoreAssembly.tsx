import CoreTile from './CoreTile'
import assemblyData from '../assemblyData.js'

const CoreAssembly = (props) => {
  return (
    <main>
      {assemblyData.map((core) => (
        <CoreTile
          key={core.id}
          coreData={core[props.selectedMetric]}
        />
      ))}
    </main>

  )
}

export default CoreAssembly