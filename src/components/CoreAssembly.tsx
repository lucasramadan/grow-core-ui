import CoreTile from './CoreTile'

// Adapted from:
// https://react-chartjs-2.js.org/examples/line-chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const CoreAssembly = (props) => {

  if (props.selectedCore) {

    // ToDo: Wrap this in below
    let coreData = props.assemblyData.filter(
      /* Grab the selected core */
      (core) => core.name === props.selectedCore
    )[0]

    // We want these to be graphs per metric
    // Refactor to allow mapping per metric?
    return (
      <main>
        <Line
          className='metric-plot'
          options={
            {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                }
              },
            }
          }
          data={
            {
              // These labels should be timestamps?
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              datasets: [
                {
                  label: props.selectedMetric,
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  data: coreData[props.selectedMetric].historical
                }
              ]
            }
          }
        />
      </main>
    )
  }
  else {
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
}

export default CoreAssembly