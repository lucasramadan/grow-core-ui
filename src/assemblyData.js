const coreData = [
  {
    id: 1,
    name: 'GC-01',
    status: 'OK',
    firmware: '2023.11.02',

    // Metrics
    temperature: {
      current: 70.0,
      unit: '°F',
      historical: [71.0, 72.0],
      lowerBound: 69.0,
      upperBound: 72.0
    },
    humidity: {
      current: 0.6,
      historical: [0.55, 0.6],
      lowerBound: 0.5,
      upperBound: 0.7
    }
  }
]

export default coreData
