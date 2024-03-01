import HeaderItem from './HeaderItem'

const Header = (props) => {
  if (props.selectedCore) {
    return (
      <header>
        <HeaderItem
          selectedCore={props.selectedCore}
          assemblyData={props.assemblyData}
          alertType='core-description'
        />
        <HeaderItem
          selectedCore={props.selectedCore}
          assemblyData={props.assemblyData}
          alertType='firmware-check'
        />
      </header>
    )
  }
  else {
    return (
      <header>
        <HeaderItem
          assemblyData={props.assemblyData}
          selectedMetric={props.selectedMetric}
          alertType="out-of-spec"
        />
        <HeaderItem
          assemblyData={props.assemblyData}
          alertType="firmware-summary"
        />
      </header>
    )
  }
}

export default Header
