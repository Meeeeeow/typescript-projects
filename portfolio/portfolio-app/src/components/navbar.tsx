import React , {useState , useEffect} from 'react';
import { Button , Container, Nav, Navbar  } from 'react-bootstrap';
import navLink1 from '../assets/img/nav-icon1.svg';
import navLink2 from '../assets/img/nav-icon2.svg';
import navLink3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

const Navbars = () => {
  const [scrolled , setScrolled] = useState<boolean>(false);
  const [isOpen ,setIsOpen] = useState<boolean>(false);

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
    <Navbar expand="xl" className={scrolled ? 'scrolled' : ''}>
    <Container>
      <Navbar.Brand>
        <Nav.Link href="/" className="logo">.Sakib()</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle className={`navbar-toggler ${isOpen ? 'open' : ''}`} aria-controls="navbarScroll" onClick={()=> setIsOpen(!isOpen)} >
        <span className={`navbar-toggler-icon`}></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto"
        >
          <Nav.Link href="#home" >.home()</Nav.Link>
          <Nav.Link href="#skills" >.skills()</Nav.Link>
          <Nav.Link href="#projects">.projects()</Nav.Link>
          <Nav.Link href="#qualification">.journeys()</Nav.Link>
        </Nav>

        {/* social media*/}
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href="https://www.linkedin.com/in/nazmus-sakib-483779229/" target="_blank" rel="noreferrer"><img src={navLink1} alt=""/></a>
            <a href="https://codeforces.com/profile/Parasyte23" target="_blank" rel="noreferrer"><img src={navLink2} alt=""/></a>
            <a href="#home"><img src={navLink3} alt=""/></a>
          </div>
          <HashLink to='#contacts'>
          <Button className='connect' onClick={()=> console.log("Connected")}><span className='connect-text'>.connect()</span></Button>
          </HashLink>
          
        </span>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars