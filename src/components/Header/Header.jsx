import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, useLocation } from "react-router-dom"
import { HomeRounded, Telegram } from '@mui/icons-material';
import { Box } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import './header.css'

const Header = (props) => {

  // const pathName = props.location.pathname
  // const pathName = useLocation().pathname
  // const pathName = props?.location?.pathname;
  const pathName = useLocation().pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
        <HomeRounded/>
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle/> 
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* <NavLink to='/' className = {pathName == "/" ? "header_link_active" : "header_link"}>Resume</NavLink> */}
          {/* <NavLink as={NavLink} to='/portfolio' className = {pathName == "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</NavLink> */}
          <Nav.Link as={NavLink} to='/' className = {pathName == "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' className = {pathName == "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</Nav.Link>
        </Nav>

        <Box className='header_right'> 
            {Object.keys(resumeData.links).map(
              (key) =>(
                <a href={resumeData.links[key].link} target='_blank' key={resumeData.links[key].link}>{resumeData.links[key].icon}</a>
              )
            )}
            
               
        </Box>
            <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
      </Navbar.Collapse>
    </Navbar>
      
  
  );
};

export default Header;
