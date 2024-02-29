const NavBarItem = (props) => {
  const itemClick = () => {
    alert(`No other ${props.itemName} are available at this time`)
  }
  return (
    <button className="navbar-item" onClick={itemClick}>
      {props.itemName}
    </button>
  )
}

export default NavBarItem