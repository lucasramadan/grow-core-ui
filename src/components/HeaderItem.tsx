import { useMemo } from "react"

const HeaderItem = (props) => {
  // Ideally this wouldn't be hardcoded
  const lastestFirmware = "2024.01.12"

  // Wrap this in a useMemo -- feedback from MattS
  const [showImgPath, showMessage, showAlt] = useMemo(() => {
    switch (props.alertType) {
      case 'core-description':
        return [
          "/assets/core_logo.png",
          `Viewing: ${props.selectedCore}`,
          "Selected Grow Core"
        ]
      case 'firmware-check':
        // I don't love this unpacking choice
        // Selected core => should only be single-elemented array
        const currentFirmware = props.assemblyData.filter(
          (core) => core.name === props.selectedCore
        )[0].firmware
        return [
          "/assets/notification.png",
          (currentFirmware === lastestFirmware) ?"Firmware Up To Date" : 
          `Firmware version is: ${currentFirmware} Consider upgrading to:${lastestFirmware}`,
          "Firmware-Validation"
        ]
      case 'out-of-spec':
        // Determines how many cores are out of spec
        const unhealthyCores = props.assemblyData.map(
          (core) => (
            Number(
              core[props.selectedMetric].current < core[props.selectedMetric].lowerBound || core[props.selectedMetric].current > core[props.selectedMetric].upperBound)
            )
        ).reduce((runningTotal, currentValue) => (runningTotal+currentValue))
        return [
          "/assets/warning.png",
          `There are ${unhealthyCores} core(s) out of spec. Please check HVAC controls.`,
          "Cores out of range"
        ]
      case 'firmware-summary':
        // Determine how many cores need Firmware upgrade
        const upgradeableCores = props.assemblyData.map(
          (core) => (
            Number(core.firmware !== lastestFirmware)
        )).reduce((runningTotal, currentValue) => (runningTotal+currentValue))
        return [
          "/assets/notification.png",
          `There are ${upgradeableCores} that need updated Firmware`,
          "Firmware Summary"
        ]
      default:
        return [
          "/assets/notification.png",
          "Nothing to see here...",
          "Missing notificatiion"
        ]
    }
  }, [props.alertType, props.selectedCore])

  return (
    <div className="display-alert">
      <img src={showImgPath} alt={showAlt}></img>
      <p id="warning-text">{showMessage}</p>
    </div>
  )
}

export default HeaderItem
