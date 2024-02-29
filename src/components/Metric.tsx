const Metric = (props) => {
  const metricClick = () => {
    props.setSelectedMetric(props.metricInfo.name)
  }
  return (
    <div className="metric">
      <img 
        src={props.metricInfo.logoPath}
        alt={props.metricInfo.alt}
        onClick={metricClick}
      />
      <h6>{props.metricInfo.name}</h6>
    </div>
  )
}


export default Metric