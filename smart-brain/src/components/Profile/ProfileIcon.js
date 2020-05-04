import React, { useState } from 'react'
import { 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';
import "./ProfileIcon.css"

const ProfileIcon = ({ onRouteChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="pa4 tc">
      <Dropdown 
        isOpen={dropdownOpen} 
        toggle={toggle}
      >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib" alt="avatar" />
        </DropdownToggle>
        <DropdownMenu
          className="b--transparent shadow-5 dropdown-menu-right" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem 
            onClick={() => onRouteChange('signout')}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon;