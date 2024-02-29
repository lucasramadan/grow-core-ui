const coreData = [
  {
    airflow: {
      current: 0.84,
      historical: [0.6, 0.86, 0.54, 0.58, 0.74, 0.65, 0.78, 0.7, 0.74, 0.8],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 970.04,
      historical: [
        863.87, 861.19, 990.32, 916.63, 950.54, 961.14, 868.91, 958.18, 995.91,
        956.78
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.51,
      historical: [1.76, 1.97, 1.48, 1.93, 1.62, 1.73, 1.53, 2.0, 1.59, 1.79],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.66,
      historical: [0.69, 0.75, 0.43, 0.44, 0.5, 0.8, 0.76, 0.75, 0.54, 0.75],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 1,
    light: {
      current: 10.11,
      historical: [
        12.88, 12.87, 11.09, 10.48, 10.07, 12.82, 13.1, 10.4, 11.76, 12.93
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-01',
    ph: {
      current: 5.86,
      historical: [5.71, 5.43, 5.43, 5.8, 5.91, 5.69, 5.42, 6.0, 5.47, 5.78],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 66.44,
      historical: [
        68.39, 78.3, 66.67, 68.5, 68.27, 65.64, 78.83, 75.49, 67.32, 68.42
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.7,
      historical: [1.17, 0.71, 0.48, 0.86, 1.19, 1.14, 0.55, 0.62, 0.9, 0.75],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.62,
      historical: [0.64, 0.96, 0.74, 0.67, 0.64, 0.76, 0.88, 0.58, 0.84, 0.6],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 909.62,
      historical: [
        988.86, 804.26, 859.31, 901.88, 818.42, 916.91, 840.93, 986.05, 832.45,
        960.75
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.31,
      historical: [1.31, 1.43, 1.36, 1.67, 1.62, 1.47, 1.41, 1.86, 1.39, 1.58],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.73,
      historical: [0.49, 0.46, 0.64, 0.66, 0.4, 0.48, 0.52, 0.71, 0.76, 0.78],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 2,
    light: {
      current: 13.11,
      historical: [
        10.51, 11.14, 10.01, 11.3, 10.45, 12.68, 12.0, 10.74, 13.09, 11.83
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-02',
    ph: {
      current: 5.87,
      historical: [5.43, 5.54, 5.7, 5.51, 5.82, 5.51, 5.98, 5.43, 5.51, 5.49],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 66.57,
      historical: [
        79.03, 69.66, 69.56, 73.52, 73.54, 65.77, 69.37, 70.0, 66.02, 75.77
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.99,
      historical: [0.63, 1.21, 0.5, 0.91, 1.1, 0.65, 0.84, 0.85, 1.08, 0.56],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.73,
      historical: [0.97, 0.6, 0.72, 0.83, 0.67, 0.87, 0.93, 0.89, 0.92, 0.79],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 807.08,
      historical: [
        971.6, 969.98, 979.62, 963.62, 935.15, 963.39, 973.7, 849.63, 930.61,
        968.59
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.39,
      historical: [1.95, 1.97, 1.38, 1.49, 1.99, 1.56, 1.36, 1.78, 1.54, 1.55],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.7,
      historical: [0.58, 0.76, 0.71, 0.55, 0.73, 0.77, 0.7, 0.62, 0.52, 0.79],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 3,
    light: {
      current: 12.94,
      historical: [
        10.79, 11.96, 11.6, 11.32, 11.83, 11.26, 11.15, 11.9, 11.27, 10.76
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-03',
    ph: {
      current: 5.74,
      historical: [5.55, 5.83, 5.85, 5.71, 5.88, 5.77, 5.63, 5.79, 5.98, 5.43],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 78.8,
      historical: [
        72.5, 67.89, 65.86, 65.04, 76.37, 65.23, 65.61, 74.43, 70.12, 79.82
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.97,
      historical: [0.76, 1.22, 1.2, 0.48, 0.83, 0.96, 1.06, 0.94, 0.72, 0.71],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.55,
      historical: [0.83, 0.52, 0.93, 0.9, 0.74, 0.91, 0.67, 0.7, 0.55, 0.75],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 825.7,
      historical: [
        955.68, 921.17, 965.36, 920.95, 977.14, 881.5, 868.16, 945.96, 923.56,
        924.34
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.48,
      historical: [1.87, 1.61, 1.61, 1.31, 1.67, 1.35, 1.98, 1.44, 1.71, 1.59],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.75,
      historical: [0.68, 0.6, 0.46, 0.77, 0.78, 0.62, 0.59, 0.66, 0.46, 0.77],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 4,
    light: {
      current: 10.78,
      historical: [
        11.92, 10.67, 11.91, 10.52, 11.75, 12.18, 12.47, 10.84, 11.25, 13.36
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-04',
    ph: {
      current: 5.56,
      historical: [5.71, 5.49, 5.73, 5.5, 5.44, 5.54, 5.63, 5.72, 5.76, 5.83],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 67.89,
      historical: [
        73.44, 74.46, 69.5, 66.48, 69.32, 71.15, 76.39, 65.56, 77.51, 74.14
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.61,
      historical: [1.02, 0.81, 0.82, 0.76, 0.78, 0.99, 1.19, 1.21, 0.74, 0.8],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.97,
      historical: [0.67, 0.96, 0.6, 0.5, 0.78, 0.57, 0.71, 0.51, 0.82, 0.64],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 812.78,
      historical: [
        959.36, 843.48, 874.77, 879.11, 976.41, 942.86, 916.69, 965.43, 813.2,
        814.56
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.68,
      historical: [1.62, 1.96, 1.7, 1.62, 1.65, 1.69, 1.99, 1.79, 1.45, 1.54],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.5,
      historical: [0.52, 0.7, 0.75, 0.69, 0.62, 0.53, 0.78, 0.52, 0.63, 0.58],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 5,
    light: {
      current: 12.05,
      historical: [
        11.34, 10.21, 12.93, 10.49, 13.46, 13.1, 11.49, 10.22, 12.4, 13.12
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-05',
    ph: {
      current: 5.74,
      historical: [5.88, 5.84, 5.76, 5.45, 5.86, 5.63, 5.98, 5.52, 5.98, 5.93],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 66.36,
      historical: [
        70.45, 78.47, 75.1, 66.54, 75.71, 74.53, 68.92, 76.38, 76.06, 72.59
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.71,
      historical: [1.09, 0.97, 0.6, 1.08, 0.97, 0.45, 1.01, 0.88, 0.62, 0.93],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.71,
      historical: [0.75, 0.55, 0.95, 0.71, 0.65, 0.82, 0.77, 0.84, 0.53, 0.57],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 995.19,
      historical: [
        927.97, 866.06, 955.79, 817.13, 870.35, 824.09, 957.6, 916.53, 862.26,
        839.7
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.93,
      historical: [1.94, 1.82, 1.76, 1.85, 1.38, 1.32, 1.89, 1.51, 1.42, 1.59],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.69,
      historical: [0.78, 0.49, 0.66, 0.61, 0.78, 0.55, 0.74, 0.52, 0.58, 0.79],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 6,
    light: {
      current: 13.85,
      historical: [
        12.28, 13.74, 13.94, 11.19, 10.23, 12.7, 12.59, 10.82, 10.88, 12.95
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-06',
    ph: {
      current: 5.49,
      historical: [5.49, 5.67, 5.49, 5.9, 5.47, 5.82, 5.78, 5.5, 5.82, 5.65],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 79.4,
      historical: [
        65.69, 70.35, 73.31, 76.6, 77.13, 74.97, 77.83, 75.58, 65.61, 71.02
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.63,
      historical: [1.01, 0.88, 1.07, 0.82, 0.51, 1.04, 0.86, 1.08, 1.16, 0.77],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.75,
      historical: [0.62, 0.84, 0.95, 0.65, 0.92, 0.91, 0.83, 0.84, 0.77, 0.83],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 935.86,
      historical: [
        944.95, 952.68, 917.6, 878.42, 885.39, 946.31, 910.13, 919.1, 903.88,
        958.59
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.56,
      historical: [1.62, 1.48, 1.89, 1.62, 1.63, 1.6, 1.66, 1.69, 1.99, 1.49],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2023.11.02',
    humidity: {
      current: 0.71,
      historical: [0.78, 0.46, 0.59, 0.51, 0.69, 0.77, 0.59, 0.68, 0.51, 0.7],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 7,
    light: {
      current: 11.87,
      historical: [
        13.6, 10.73, 11.52, 12.84, 10.27, 13.7, 12.43, 12.03, 13.49, 10.91
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-07',
    ph: {
      current: 5.91,
      historical: [5.67, 5.77, 5.55, 5.52, 5.57, 5.42, 5.62, 5.91, 5.97, 5.63],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 71.08,
      historical: [
        74.1, 70.37, 65.55, 75.65, 70.34, 66.04, 72.73, 71.25, 77.49, 78.28
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.84,
      historical: [1.05, 1.19, 0.5, 1.18, 0.65, 0.93, 0.74, 1.11, 0.75, 0.92],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.54,
      historical: [0.61, 0.66, 0.8, 0.5, 0.92, 0.73, 0.91, 0.57, 0.79, 0.76],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 907.11,
      historical: [
        931.91, 859.92, 998.83, 890.08, 965.19, 900.09, 909.18, 803.02, 806.07,
        846.54
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.94,
      historical: [1.89, 1.35, 1.91, 1.32, 1.52, 1.52, 1.96, 1.99, 1.51, 1.46],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.49,
      historical: [0.69, 0.55, 0.61, 0.5, 0.51, 0.77, 0.43, 0.72, 0.42, 0.47],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 8,
    light: {
      current: 13.89,
      historical: [
        12.25, 10.43, 10.39, 11.22, 12.06, 13.73, 12.18, 11.33, 13.26, 13.15
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-08',
    ph: {
      current: 5.93,
      historical: [5.5, 5.81, 5.79, 5.77, 5.58, 5.97, 5.9, 5.53, 5.49, 5.4],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 67.01,
      historical: [
        79.69, 75.93, 65.5, 67.86, 74.91, 65.17, 72.77, 66.92, 79.87, 67.09
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.68,
      historical: [0.55, 0.69, 0.53, 0.87, 0.49, 0.98, 0.88, 0.82, 0.47, 0.88],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.85,
      historical: [0.74, 0.59, 0.75, 0.66, 0.53, 0.51, 0.92, 0.75, 0.71, 0.9],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 961.81,
      historical: [
        905.65, 945.05, 812.5, 977.21, 952.38, 965.77, 895.0, 978.3, 859.28,
        902.65
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.39,
      historical: [1.67, 1.35, 1.56, 1.31, 1.46, 1.54, 1.94, 1.46, 1.44, 1.85],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.59,
      historical: [0.44, 0.69, 0.8, 0.55, 0.53, 0.71, 0.8, 0.53, 0.76, 0.5],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 9,
    light: {
      current: 12.48,
      historical: [
        11.3, 11.24, 10.12, 12.48, 13.64, 12.31, 12.48, 10.1, 11.18, 12.89
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-09',
    ph: {
      current: 5.7,
      historical: [5.69, 5.55, 5.8, 5.82, 5.57, 5.88, 5.77, 5.54, 5.99, 5.97],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 75.67,
      historical: [
        67.11, 78.25, 76.79, 72.43, 71.7, 73.56, 73.11, 78.92, 79.21, 71.24
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.85,
      historical: [0.93, 0.99, 1.2, 0.63, 0.89, 0.49, 0.72, 1.22, 1.11, 0.91],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.93,
      historical: [0.81, 0.83, 0.64, 0.9, 0.82, 0.73, 0.98, 0.75, 0.87, 0.89],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 859.49,
      historical: [
        970.98, 899.86, 801.26, 825.71, 969.38, 800.57, 823.89, 810.91, 875.92,
        937.3
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.62,
      historical: [1.48, 1.75, 1.8, 1.57, 1.31, 1.59, 1.88, 1.65, 1.57, 1.91],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.45,
      historical: [0.59, 0.43, 0.51, 0.75, 0.66, 0.44, 0.45, 0.59, 0.45, 0.65],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 10,
    light: {
      current: 10.86,
      historical: [
        12.3, 12.12, 13.88, 13.32, 10.72, 10.74, 12.38, 13.03, 13.45, 10.98
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-010',
    ph: {
      current: 5.43,
      historical: [5.74, 5.54, 5.51, 5.96, 5.7, 5.84, 5.75, 5.96, 5.76, 5.41],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 69.25,
      historical: [
        73.08, 72.87, 71.12, 73.43, 75.49, 67.38, 68.92, 66.21, 70.51, 68.83
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.75,
      historical: [0.79, 1.08, 0.72, 0.62, 0.95, 0.93, 1.23, 0.59, 1.2, 0.66],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.9,
      historical: [0.78, 0.63, 0.81, 0.53, 0.71, 0.62, 0.94, 0.6, 0.68, 0.84],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 989.37,
      historical: [
        854.14, 894.28, 962.54, 925.48, 994.82, 953.48, 811.97, 863.68, 957.22,
        950.09
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.49,
      historical: [1.47, 1.73, 1.31, 1.44, 1.91, 1.83, 1.64, 1.32, 1.4, 1.41],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.68,
      historical: [0.73, 0.64, 0.42, 0.54, 0.53, 0.41, 0.63, 0.44, 0.48, 0.74],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 11,
    light: {
      current: 13.42,
      historical: [
        11.08, 13.43, 10.28, 10.65, 13.92, 10.82, 11.57, 13.41, 12.22, 12.48
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-011',
    ph: {
      current: 5.74,
      historical: [5.52, 5.7, 5.99, 5.74, 5.47, 5.45, 5.84, 5.65, 5.71, 5.47],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 77.41,
      historical: [
        68.99, 72.19, 66.5, 74.87, 78.08, 69.94, 67.94, 69.85, 79.16, 66.81
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.57,
      historical: [0.83, 0.95, 0.87, 0.68, 0.95, 1.2, 1.23, 0.83, 0.93, 0.7],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.7,
      historical: [0.85, 0.99, 0.55, 0.95, 0.87, 0.97, 0.97, 0.51, 0.89, 0.96],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 884.92,
      historical: [
        829.51, 916.74, 982.17, 949.43, 912.96, 830.38, 830.18, 852.29, 842.86,
        945.87
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.96,
      historical: [1.39, 1.4, 1.95, 1.34, 1.94, 1.6, 1.44, 1.39, 1.73, 1.9],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.43,
      historical: [0.53, 0.43, 0.59, 0.48, 0.78, 0.42, 0.45, 0.79, 0.5, 0.47],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 12,
    light: {
      current: 11.25,
      historical: [
        13.55, 11.28, 13.32, 13.31, 13.75, 11.67, 13.49, 12.65, 11.55, 10.17
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-012',
    ph: {
      current: 5.86,
      historical: [5.85, 5.58, 5.7, 5.77, 5.55, 5.62, 5.78, 5.53, 5.85, 5.77],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Offline',
    temperature: {
      current: 69.6,
      historical: [
        78.74, 75.74, 69.21, 69.26, 69.1, 75.63, 70.49, 65.56, 68.68, 74.63
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.99,
      historical: [0.62, 0.94, 0.48, 1.14, 0.56, 1.09, 0.46, 0.97, 1.02, 0.63],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.9,
      historical: [0.84, 0.74, 0.68, 0.94, 0.61, 0.91, 0.58, 0.78, 0.53, 0.86],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 865.98,
      historical: [
        922.75, 968.8, 831.61, 861.98, 932.9, 928.81, 863.72, 960.46, 907.46,
        995.14
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.83,
      historical: [1.73, 1.89, 1.45, 1.67, 1.72, 1.64, 1.38, 1.95, 1.44, 1.72],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.4,
      historical: [0.51, 0.46, 0.74, 0.52, 0.55, 0.61, 0.4, 0.7, 0.51, 0.59],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 13,
    light: {
      current: 10.3,
      historical: [
        13.89, 12.8, 11.52, 12.58, 12.29, 12.8, 10.88, 11.29, 12.26, 12.75
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-013',
    ph: {
      current: 5.73,
      historical: [5.67, 5.52, 5.89, 5.99, 5.44, 5.52, 5.91, 5.79, 5.61, 5.87],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 71.04,
      historical: [
        78.64, 70.11, 71.69, 72.86, 74.71, 76.61, 72.56, 67.57, 67.81, 77.37
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.7,
      historical: [1.19, 0.62, 0.53, 1.12, 1.2, 1.05, 1.07, 0.79, 0.63, 1.22],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.74,
      historical: [0.76, 0.97, 0.73, 0.99, 0.76, 0.52, 0.94, 0.56, 0.5, 0.76],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 841.32,
      historical: [
        854.3, 991.0, 842.04, 934.66, 827.96, 846.28, 876.12, 819.13, 971.42,
        922.12
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.42,
      historical: [1.71, 1.92, 1.93, 1.87, 1.93, 1.87, 1.99, 1.67, 1.64, 1.79],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.42,
      historical: [0.48, 0.73, 0.74, 0.79, 0.78, 0.64, 0.67, 0.78, 0.4, 0.63],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 14,
    light: {
      current: 11.61,
      historical: [
        11.33, 10.14, 12.87, 10.08, 12.48, 10.61, 12.27, 13.49, 13.34, 12.29
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-014',
    ph: {
      current: 5.43,
      historical: [5.43, 5.81, 5.64, 5.65, 5.89, 5.52, 5.88, 5.89, 5.7, 5.95],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 78.09,
      historical: [
        71.58, 66.48, 67.31, 73.15, 79.41, 69.83, 69.39, 74.77, 66.47, 72.93
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 1.05,
      historical: [0.76, 0.94, 0.86, 1.16, 0.9, 1.22, 0.47, 0.64, 1.25, 0.75],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.71,
      historical: [0.68, 0.77, 0.91, 0.92, 0.95, 0.68, 0.95, 0.78, 0.71, 0.78],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 997.12,
      historical: [
        870.55, 847.22, 822.66, 849.25, 876.45, 812.35, 852.9, 971.19, 883.16,
        838.54
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.65,
      historical: [1.5, 1.8, 1.56, 1.87, 1.63, 1.98, 1.86, 1.63, 1.37, 1.6],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.69,
      historical: [0.67, 0.4, 0.57, 0.69, 0.55, 0.5, 0.42, 0.67, 0.71, 0.43],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 15,
    light: {
      current: 12.18,
      historical: [
        13.22, 11.67, 10.03, 11.87, 11.58, 11.18, 11.1, 13.96, 10.87, 11.65
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-015',
    ph: {
      current: 5.82,
      historical: [5.82, 5.61, 5.58, 5.55, 5.44, 5.53, 5.64, 5.74, 5.69, 5.75],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 76.28,
      historical: [
        73.85, 65.92, 73.45, 67.59, 70.98, 76.79, 76.57, 78.38, 67.76, 70.5
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 1.17,
      historical: [0.79, 1.15, 0.59, 0.88, 0.55, 0.92, 1.16, 1.08, 0.64, 0.85],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.77,
      historical: [0.61, 0.54, 0.51, 0.97, 0.92, 0.69, 0.52, 0.98, 0.79, 0.65],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 807.16,
      historical: [
        901.03, 965.48, 825.74, 845.44, 983.69, 917.57, 873.38, 831.88, 872.86,
        991.74
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.34,
      historical: [1.41, 1.94, 1.44, 1.86, 1.45, 1.92, 1.45, 1.91, 1.77, 1.35],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2023.11.02',
    humidity: {
      current: 0.47,
      historical: [0.71, 0.79, 0.49, 0.6, 0.73, 0.79, 0.46, 0.59, 0.61, 0.44],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 16,
    light: {
      current: 10.45,
      historical: [
        13.37, 10.82, 13.12, 10.87, 10.31, 10.96, 13.48, 10.35, 13.82, 13.59
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-016',
    ph: {
      current: 5.62,
      historical: [5.46, 5.82, 5.61, 5.57, 5.73, 5.94, 5.98, 5.88, 5.47, 5.82],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 65.02,
      historical: [
        77.14, 68.91, 72.1, 76.44, 74.52, 78.6, 75.53, 72.45, 69.15, 71.48
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.56,
      historical: [0.6, 0.62, 0.56, 0.48, 0.89, 1.22, 0.63, 1.17, 1.17, 1.21],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.96,
      historical: [0.94, 0.98, 0.64, 0.98, 0.82, 0.83, 0.74, 0.57, 0.99, 0.6],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 947.82,
      historical: [
        905.34, 965.57, 951.71, 829.16, 811.07, 920.23, 985.41, 968.14, 837.63,
        864.08
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.46,
      historical: [1.36, 1.89, 1.59, 1.85, 1.93, 1.48, 1.88, 1.55, 1.93, 1.49],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.78,
      historical: [0.63, 0.59, 0.64, 0.66, 0.71, 0.56, 0.76, 0.55, 0.51, 0.44],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 17,
    light: {
      current: 10.35,
      historical: [
        11.53, 10.69, 12.79, 13.2, 12.91, 12.41, 13.46, 13.34, 10.15, 13.29
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-017',
    ph: {
      current: 5.95,
      historical: [5.54, 5.68, 5.58, 5.98, 5.44, 5.65, 5.77, 5.87, 5.86, 5.59],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 77.62,
      historical: [
        69.99, 69.3, 65.26, 74.06, 65.52, 65.22, 76.59, 68.32, 74.91, 79.52
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.79,
      historical: [1.11, 1.01, 0.91, 1.07, 1.13, 0.6, 0.76, 1.0, 1.1, 1.24],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.9,
      historical: [0.52, 0.58, 0.85, 0.54, 0.83, 0.8, 0.88, 0.85, 0.55, 0.77],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 934.95,
      historical: [
        810.33, 808.86, 866.26, 924.85, 835.67, 921.23, 821.53, 947.25, 891.94,
        836.0
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.44,
      historical: [1.37, 1.3, 1.42, 1.61, 1.55, 1.64, 1.96, 1.83, 1.97, 1.9],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.78,
      historical: [0.52, 0.54, 0.61, 0.41, 0.7, 0.64, 0.6, 0.65, 0.5, 0.53],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 18,
    light: {
      current: 13.43,
      historical: [
        13.86, 11.25, 11.89, 10.37, 11.87, 12.14, 10.78, 10.15, 12.27, 11.73
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-018',
    ph: {
      current: 5.79,
      historical: [5.57, 5.61, 5.5, 5.7, 5.67, 5.46, 5.47, 5.68, 5.79, 5.81],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 79.99,
      historical: [
        78.47, 70.8, 69.31, 70.02, 73.78, 70.36, 73.04, 75.3, 70.44, 72.28
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.86,
      historical: [0.65, 0.88, 0.92, 0.97, 0.74, 0.82, 0.72, 1.11, 0.87, 0.6],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.8,
      historical: [0.67, 0.69, 0.77, 0.63, 0.88, 0.64, 0.8, 0.78, 0.75, 0.76],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 883.04,
      historical: [
        881.73, 922.33, 866.25, 983.92, 972.9, 943.18, 927.81, 888.58, 910.8,
        849.33
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.59,
      historical: [1.63, 1.67, 1.79, 1.66, 1.36, 1.53, 1.71, 1.37, 1.36, 1.5],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.41,
      historical: [0.74, 0.43, 0.64, 0.41, 0.69, 0.5, 0.6, 0.68, 0.72, 0.71],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 19,
    light: {
      current: 11.2,
      historical: [
        13.41, 11.63, 13.97, 10.75, 13.76, 13.12, 13.46, 12.51, 13.48, 11.17
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-019',
    ph: {
      current: 5.52,
      historical: [5.92, 5.44, 5.86, 5.46, 5.44, 5.88, 5.98, 5.61, 5.98, 5.92],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 68.3,
      historical: [
        67.44, 69.96, 74.69, 75.07, 77.1, 75.74, 75.62, 78.98, 65.11, 76.86
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.8,
      historical: [1.02, 1.04, 0.49, 1.16, 0.82, 1.05, 0.79, 0.71, 0.51, 1.05],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.92,
      historical: [0.96, 0.67, 0.61, 0.65, 0.86, 0.74, 0.68, 0.56, 0.71, 0.6],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 800.39,
      historical: [
        801.2, 957.96, 930.25, 894.34, 950.33, 852.79, 903.84, 980.45, 937.16,
        824.96
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.89,
      historical: [1.61, 1.64, 1.75, 1.45, 1.98, 1.4, 1.91, 1.41, 1.68, 1.38],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.45,
      historical: [0.75, 0.71, 0.45, 0.7, 0.46, 0.62, 0.59, 0.73, 0.72, 0.64],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 20,
    light: {
      current: 11.2,
      historical: [
        12.21, 11.51, 11.36, 10.51, 13.19, 12.59, 10.65, 12.8, 12.01, 12.9
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-020',
    ph: {
      current: 5.56,
      historical: [5.74, 5.42, 5.97, 5.86, 5.69, 5.61, 5.79, 5.71, 5.53, 5.78],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 77.04,
      historical: [
        72.44, 78.72, 74.11, 67.44, 76.49, 66.39, 65.85, 71.75, 74.33, 65.28
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.89,
      historical: [0.7, 0.75, 1.13, 0.82, 0.61, 0.6, 0.76, 0.89, 0.81, 1.16],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.67,
      historical: [0.57, 0.58, 0.54, 0.6, 0.62, 0.85, 0.99, 0.58, 0.88, 0.57],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 803.66,
      historical: [
        991.54, 813.34, 800.38, 846.71, 913.18, 954.49, 948.6, 848.53, 814.65,
        970.06
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.96,
      historical: [1.62, 1.72, 1.66, 1.31, 1.68, 1.49, 1.68, 1.78, 1.61, 1.56],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.6,
      historical: [0.72, 0.54, 0.53, 0.61, 0.53, 0.59, 0.77, 0.5, 0.67, 0.77],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 21,
    light: {
      current: 12.72,
      historical: [
        10.89, 13.68, 10.71, 12.69, 11.91, 12.09, 12.35, 11.37, 11.3, 10.3
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-021',
    ph: {
      current: 5.46,
      historical: [5.86, 5.41, 5.68, 5.53, 5.99, 5.66, 5.83, 5.64, 5.61, 5.61],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Offline',
    temperature: {
      current: 76.09,
      historical: [
        72.29, 72.14, 71.81, 72.43, 73.94, 75.84, 71.49, 70.24, 66.98, 70.94
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.7,
      historical: [1.0, 1.21, 1.14, 0.59, 0.83, 0.47, 0.68, 0.47, 1.07, 0.67],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.8,
      historical: [0.88, 0.56, 0.87, 0.92, 0.89, 0.75, 0.66, 0.66, 0.84, 0.98],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 966.94,
      historical: [
        929.23, 896.14, 856.09, 917.2, 938.92, 802.23, 984.81, 860.74, 863.67,
        854.55
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.64,
      historical: [1.9, 1.81, 1.96, 2.0, 1.93, 1.88, 1.47, 1.44, 1.74, 1.44],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.42,
      historical: [0.71, 0.77, 0.73, 0.61, 0.43, 0.77, 0.43, 0.51, 0.45, 0.79],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 22,
    light: {
      current: 12.89,
      historical: [
        12.3, 13.18, 11.62, 12.64, 13.02, 13.65, 13.72, 10.54, 12.84, 11.71
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-022',
    ph: {
      current: 5.76,
      historical: [5.81, 5.61, 5.57, 5.52, 5.96, 5.76, 5.7, 5.48, 5.9, 5.93],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 74.66,
      historical: [
        76.44, 73.73, 79.52, 66.0, 66.0, 71.94, 70.56, 78.3, 69.53, 74.05
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.45,
      historical: [0.66, 0.95, 0.48, 0.56, 0.93, 0.81, 0.74, 0.91, 1.13, 0.63],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.75,
      historical: [0.7, 0.59, 0.74, 0.55, 0.57, 0.52, 0.58, 0.96, 0.66, 0.83],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 976.58,
      historical: [
        813.32, 837.41, 870.5, 892.79, 967.32, 930.43, 844.47, 814.11, 800.06,
        819.49
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.93,
      historical: [1.95, 1.35, 1.8, 1.43, 1.52, 1.46, 1.69, 1.58, 1.93, 1.65],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.65,
      historical: [0.67, 0.47, 0.64, 0.76, 0.58, 0.62, 0.6, 0.73, 0.44, 0.59],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 23,
    light: {
      current: 11.88,
      historical: [
        11.23, 12.88, 12.82, 10.75, 11.39, 13.71, 12.1, 13.5, 13.19, 11.18
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-023',
    ph: {
      current: 5.5,
      historical: [5.87, 5.58, 5.46, 5.74, 5.43, 5.51, 5.52, 5.46, 5.41, 5.53],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 67.97,
      historical: [
        69.72, 71.35, 69.84, 70.81, 68.7, 70.1, 67.94, 72.67, 70.62, 78.06
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 0.88,
      historical: [0.57, 0.52, 1.12, 0.59, 1.16, 0.81, 1.14, 1.13, 0.86, 1.1],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.73,
      historical: [0.92, 0.99, 0.73, 0.86, 0.66, 0.86, 0.73, 0.71, 0.55, 0.85],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 976.49,
      historical: [
        954.26, 928.74, 981.93, 960.61, 829.55, 951.71, 846.81, 901.84, 849.48,
        843.94
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.36,
      historical: [1.52, 1.78, 1.5, 1.5, 1.39, 1.33, 1.99, 1.97, 1.65, 1.49],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.55,
      historical: [0.61, 0.62, 0.7, 0.67, 0.42, 0.72, 0.8, 0.49, 0.74, 0.66],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 24,
    light: {
      current: 13.71,
      historical: [
        10.8, 12.41, 13.23, 10.57, 13.4, 11.99, 10.77, 11.83, 12.37, 11.41
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-024',
    ph: {
      current: 5.95,
      historical: [5.78, 5.92, 5.6, 5.65, 5.74, 5.44, 6.0, 5.75, 5.93, 5.78],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 74.34,
      historical: [
        79.01, 74.8, 67.29, 66.59, 78.79, 79.0, 70.95, 72.52, 66.29, 66.54
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 1.05,
      historical: [0.53, 0.87, 0.51, 1.17, 0.95, 0.75, 0.78, 0.56, 0.89, 0.64],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  },
  {
    airflow: {
      current: 0.64,
      historical: [0.52, 0.6, 0.85, 0.6, 0.58, 0.54, 0.58, 0.57, 0.75, 0.96],
      lowerBound: 0.5,
      unit: 'm/s',
      upperBound: 1.0
    },
    co2: {
      current: 946.85,
      historical: [
        861.28, 981.26, 849.76, 843.79, 882.71, 812.65, 858.45, 889.76, 947.36,
        930.85
      ],
      lowerBound: 800,
      unit: 'ppm',
      upperBound: 1000
    },
    ec: {
      current: 1.32,
      historical: [1.82, 1.39, 1.39, 1.32, 1.33, 1.98, 1.55, 1.74, 1.49, 1.45],
      lowerBound: 1.3,
      unit: 'mS/m',
      upperBound: 2.0
    },
    firmware: '2024.01.12',
    humidity: {
      current: 0.43,
      historical: [0.66, 0.7, 0.65, 0.65, 0.64, 0.55, 0.42, 0.8, 0.69, 0.42],
      lowerBound: 0.4,
      unit: '%RH',
      upperBound: 0.8
    },
    id: 25,
    light: {
      current: 13.46,
      historical: [
        12.64, 10.4, 13.09, 12.97, 11.1, 11.8, 11.63, 13.66, 10.23, 12.98
      ],
      lowerBound: 10.0,
      unit: 'moles/day',
      upperBound: 14.0
    },
    name: 'GC-025',
    ph: {
      current: 5.72,
      historical: [5.59, 5.47, 5.51, 5.77, 5.61, 5.55, 5.65, 5.4, 5.49, 5.41],
      lowerBound: 5.4,
      unit: 'moles/liter',
      upperBound: 6.0
    },
    status: 'Online',
    temperature: {
      current: 68.82,
      historical: [
        67.34, 79.86, 78.13, 70.71, 70.06, 71.78, 77.53, 70.28, 69.86, 65.9
      ],
      lowerBound: 65.0,
      unit: '°F',
      upperBound: 80.0
    },
    vapor: {
      current: 1.04,
      historical: [1.0, 1.06, 1.09, 0.6, 1.23, 0.89, 1.25, 0.87, 1.12, 0.96],
      lowerBound: 0.45,
      unit: 'kPa',
      upperBound: 1.25
    }
  }
]

export default coreData
