import { useMemo } from "react"

const HeaderItem = (props) => {
  // Wrap this in a useMemo -- feedback from MattS
  const [showImgPath, showMessage, showAlt] = useMemo(() => {
    switch (props.alertType) {
      case 'core-description':
        return [
          "/assets/core_logo.png",
          `Viewing ${props.selectedCore}`,
          "Selected Grow Core"
        ]
      case 'firmware-check':
        return [
          "/assets/notification.png",
          "Firmware version is: 2023.11.02 Consider upgrading to: 2024.01.12",
          "Firmware-Validation"
        ]
      case 'out-of-spec':
        return [
          "/assets/warning.png",
          "There are 4 cores out of spec. Please check HVAC controls.",
          "Cores out of range"
        ]
      case 'firmware-summary':
        return [
          "/assets/notification.png",
          "Firmware version is: 2023.11.02 Consider upgrading to: 2024.01.12",
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
