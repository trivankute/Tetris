import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState, memo, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {faWrench} from '@fortawesome/free-solid-svg-icons'
import Detailed_Profile from './Detailed_Profile'
import Event_bus from './Event_bus'

import classes from './App_navbar.module.css'
import clsx from 'clsx'

import BLOCKS_COLORS from '../constances/BLOCKS_COLORS'


function App_navbar() {
  let expand = 'xxl'
  let mainTitle:Array<string> = ["TriVan's ",'T','e','t','r','i','s']
  const [name, setName] = useState(JSON.parse(localStorage!.getItem('name')!)||"")
  const [isNameOkay, setIsNameOkay] = useState(()=>{ return (name!=="")?true:false})
  const handleChangeName = useCallback(()=>{
    if(name!=="")
    {
      localStorage.setItem('name',JSON.stringify(name))
      Event_bus.dispatch("re_renderName_forPopup", name)
      setIsNameOkay(prev=>!prev)
    }
  },[name])
  const handleName = useCallback((value:string)=>{
    setName(value)
  },[])

  function handleHomeEvent()
  {
    Event_bus.dispatch("Home_clicked", true)
  }

  return (
    <>
        <Navbar onSubmit={(e)=>{e.preventDefault();handleChangeName()}} bg="dark" expand={expand} className="mb-3 fixed-top d-flex flex-column justify-content-center align-items-center">
          <Container fluid>
            <Navbar.Brand onClick={handleHomeEvent} style={{color:"white", cursor:"pointer"}} href="">
              <>
              {
              mainTitle.map((item, index)=>{
                return (
                  <span key={index} style={{color:BLOCKS_COLORS[index], fontWeight:500}}>{item}</span>
                )
              })
              }
              </>
            </Navbar.Brand>
            {/* <Navbar.Toggle style={{color:"#333", backgroundColor:'white'}} aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} className={clsx(classes.Navbar_toggle)}>Profile</Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{
                // minHeight:100,
                 borderRadius:4, top:56, maxHeight:400}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Profile
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  style={{fontSize:18, color:"#333", cursor:'default'}}>{name===""?"Writes your name here.":"Name: "+name}
                  {isNameOkay&&
                  <FontAwesomeIcon onClick={handleChangeName} className="primary text-primary" icon={faWrench as IconProp} style={{marginLeft:10, cursor:'pointer'}}/>
                  }
                  </Nav.Link>
                </Nav>

                {!isNameOkay && 
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Your Name"
                    onChange={(e)=>handleName(e.target.value)}
                    className="me-2"
                    aria-label="Search"
                    value={name}
                  />
                  <Button 
                     variant="outline-success" onClick={handleChangeName}>Set</Button>
                </Form>
                }

                <Detailed_Profile/>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default memo(App_navbar);