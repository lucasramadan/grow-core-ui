import HeaderItem from './HeaderItem'

const Header = (props) => {
  if (props.selectedCore) {
    return (
      <header>
        <HeaderItem
          selectedCore={props.selectedCore}
          coreData={props.assemblyData}
          alertType='core-description'
        />
        <HeaderItem
          selectedCore={props.selectedCore}
          coreData={props.assemblyData}
          alertType='firmware-check'
        />
      </header>
    )
  }
  else {
    return (
      <header>
        <HeaderItem
          coreData={props.assemblyData}
          alertType="out-of-spec"
        />
        <HeaderItem
          coreData={props.assemblyData}
          alertType="firmware-summary"
        />
      </header>
    )
  }
}

export default Header
