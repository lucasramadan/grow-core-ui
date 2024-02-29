import NavBarItem from './NavBarItem'

const NavBar = () => {
  return (
    <nav>
      <img id="logo" src="../assets/almanac.svg" alt="" width="150px" />
      <NavBarItem itemName='Greenhouses'/>
      <NavBarItem itemName='Metrics'/>
      <NavBarItem itemName='Configurations'/>
      <NavBarItem itemName='Users'/>
      <img id="user" src="../assets/user.png" alt="" width="30px" />
    </nav>

  )
}

export default NavBar