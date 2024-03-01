
// We'll want to conditionally render this
// Based on the prop data passed for whether or not it's within spec

// Also the metric that has been select if possible

const CoreTile = (props) => {
  const healthyCore = props.coreData.current > props.coreData.lowerBound && props.coreData.current < props.coreData.upperBound
  return (
    <div className="core-pannel">
      <img src="/assets/core_logo.png" alt="grow-core" />
      <strong className={healthyCore ? "healthy-core" : "unhealthy-core"}>{`${props.coreData.current}${props.coreData.unit}`}</strong>
    </div>
  )
}

export default CoreTile