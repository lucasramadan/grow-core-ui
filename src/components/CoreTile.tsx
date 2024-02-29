
// We'll want to conditionally render this
// Based on the prop data passed for whether or not it's within spec

// Also the metric that has been select if possible

const CoreTile = (props) => {
  return (
    <div className="core-pannel">
      <img src="/assets/core_logo.png" alt="grow-core" />
      <strong className="healthy-core">{`${props.coreData.temperature.current}${props.coreData.temperature.unit}`}</strong>
    </div>
  )
}

export default CoreTile