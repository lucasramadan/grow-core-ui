import Metric from "./Metric"
import metricList from '../metricList.js'

// Trying to generate the metrics by file in a dir?
// var fs = require('fs');
// var files = fs.readdirSync('/metrics/');

const MetricSelector = (props) => {
  return (
    <aside>
      <h5 id="metric-head">Metrics</h5>
      {metricList.map(
        (metric) => (
          <Metric
            key={metric.id}
            metricInfo={metric}
            selectedMetric={props.selectedMetric}
            setSelectedMetric={props.setSelectedMetric}
          />
        )
      )}
    </aside>

  )
}

export default MetricSelector