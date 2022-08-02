import React,{useState , useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import mainBanner from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const toRotate = ['Frontend developer' , 'Software Enginneer'];
    const [loopNum , setLoopNum] = useState<number>(0);
    const [text , setText] = useState<string>('');
    const [isDel , setIsDel] = useState<boolean>(false);
    const [letterInterval , setLetterInterval] = useState<number>(300 - Math.floor(Math.random())*100);
    const wordInterval = 2500;

    useEffect(()=>{
        const letterTick = setInterval(()=>{
            tick();
        },letterInterval)

        return()=> clearInterval(letterTick);
    },[text])

    const tick =()=>{
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDel ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length + 1);
        setText(updatedText);
        if(isDel){
            setLetterInterval(prevInterval => prevInterval / 2);
        }
        if(!isDel && updatedText === fullText)
        {
            setIsDel(true);
            setLetterInterval(wordInterval);
        }else if(isDel && updatedText === '')
        {
            setIsDel(false);
            setLoopNum(loopNum + 1);
            setLetterInterval(500);
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className='start-tag'>Welcome to my Portfolio</span>
                            <h1>Hi!I'm Nazmus Sakib. A <span className='wrap'>{text}</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quidem id culpa itaque quam laborum nobis illo magni praesentium, officiis repellat exercitationem distinctio eaque eum quae aut inventore voluptatem. Iusto!</p>
                            <Button className='again-connect' onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle/></Button>
                        </div>} 
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={mainBanner} alt='header-img'/>     
                        </div>
                    }
                    </TrackVisibility>
                   
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner