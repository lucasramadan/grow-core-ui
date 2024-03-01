import CoreTile from './CoreTile'

const CoreAssembly = (props) => {
  return (
    <main>
      {props.assemblyData.map((core) => (
        <CoreTile
          key={core.id}
          coreData={core}
          selectedMetric={props.selectedMetric}
          selectedCore={props.selectedCore}
          setSelectedCore={props.setSelectedCore}
        />
      ))}
    </main>

  )
}

export default CoreAssembly