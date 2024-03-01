const Metric = (props) => {
  const metricClick = () => {
    props.setSelectedMetric(props.metricInfo.code)
  }

  return (
    <div className={(props.metricInfo.code == props.selectedMetric) ? "metric-selected": 'metric'}>
      <img 
        src={props.metricInfo.logoPath}
        alt={props.metricInfo.alt}
        onClick={metricClick}
      />
      <strong>{props.metricInfo.displayName}</strong>
      {/* <h6>{props.metricInfo.displayName}</h6> */}
    </div>
  )
}


export default Metric