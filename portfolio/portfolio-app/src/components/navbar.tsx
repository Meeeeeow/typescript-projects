import React , {useState , useEffect} from 'react';
import { Button , Container, Nav, Navbar  } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navLink1 from '../assets/img/nav-icon1.svg';
import navLink2 from '../assets/img/nav-icon2.svg';
import navLink3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

const Navbars = () => {
  const [scrolled , setScrolled] = useState<boolean>(false);

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50)
        setScrolled(true);
      else
        setScrolled(false);
    }

    window.addEventListener("scroll" , onScroll);

    return()=>{
      window.removeEventListener("scroll", onScroll);
    }
  },[])
  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
    <Container>
      <Navbar.Brand>
        <Nav.Link href="/"><img src={logo} alt="logo"/></Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" >
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto"
        >
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#skills" >Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>

        {/* social media*/}
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href="#home"><img src={navLink1} alt=""/></a>
            <a href="#home"><img src={navLink2} alt=""/></a>
            <a href="#home"><img src={navLink3} alt=""/></a>
          </div>
          <HashLink to='#contacts'>
          <Button className='connect' onClick={()=> console.log("Connected")}><span className='connect-text'>Let's Connect</span></Button>
          </HashLink>
          
        </span>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars