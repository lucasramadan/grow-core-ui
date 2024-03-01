const CoreTile = (props) => {
  
  // Update selected
  const coreClick = () => {
    props.setSelectedCore(props.coreData.name)
  }
  
  // Calculate if core is within bounds
  const healthyCore = props.coreData[props.selectedMetric].current > props.coreData[props.selectedMetric].lowerBound && props.coreData[props.selectedMetric].current < props.coreData[props.selectedMetric].upperBound

  return (
    <div className="core-pannel" onClick={coreClick}>
      <img src="/assets/core_logo.png" alt="grow-core" />
      <strong className={healthyCore ? "healthy-core" : "unhealthy-core"}>{`${props.coreData[props.selectedMetric].current}${props.coreData[props.selectedMetric].unit}`}</strong>
    </div>
  )
}

export default CoreTile