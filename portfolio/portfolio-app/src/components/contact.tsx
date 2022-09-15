import React , {useState , useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type formInitialProps = {
    firstName : string,
    lastName : string,
    email : string,
    phone : string,
    message : string
}
type stateProps = {
    message : string,
    success : boolean
}
const Contact = () => {
  const form = useRef<any>(); 
  const sendEmail = (e:any) => {
    e.preventDefault();
    setSubmitButton('Sending...');
    emailjs.sendForm('service_1r6kk4l', 'template_i3iej28', form.current, '7QbqJ239XcCWI6H-4')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setStatus({success:true , message : 'Message  sent successfully'});
          toast.success('Message sent successfully',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 2000
          });
          setSubmitButton("Send");

      }, (error) => {
          console.log(error.text);
          setStatus({success:false , message : 'There was an error sending your message'});
          toast.error('There was an error sending your message',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 2000
          });
          setSubmitButton("Send");
      });
  }; 
  const [formDetails , setFormDetails] = useState<formInitialProps>(
    {
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        message : ''
    }
  );
  const [submitButton , setSubmitButton] = useState('Send'); //initially send when pressed send will be updated to Sending
  const [status , setStatus] = useState<stateProps>({
    message : '',
    success : false
  }); //response from the API
  
  const onFormUpdate = (category : string, value : string)=>{
    setFormDetails({
        ...formDetails,
        [category] : value
    });
  }
  return (
    <section className="contact">
        <Container>

            <Row className='align-items-center'>
                <div className="title">
                <h2>Contact</h2>
                <div>
                    <h2>Contact</h2>
                </div>
                </div>
                <Col md={6}>
                    <img src={contactImg} alt="Contact"/>
                </Col>
                <Col md={6}>
                    <h2 className='intro'>Say hello!</h2>
                    <form ref = {form} onSubmit={sendEmail}>
                        <ToastContainer/>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} name = "user_first_name" placeholder="Enter your first name"
                                onChange={(e)=>{onFormUpdate('firstName', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} name= "user_last_name" placeholder="Enter your last name"
                                    onChange={(e)=>{onFormUpdate('lastName', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" value={formDetails.email} name="user_email" placeholder="Enter your email address"
                                    onChange={(e)=>{onFormUpdate('email', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" value={formDetails.phone} placeholder="Enter your phone No."
                                    onChange={(e)=>{onFormUpdate('phone', e.target.value)}}/>
                            </Col>
                            <Col className='px-1'>
                                <textarea rows={6} value={formDetails.message} name="message" placeholder="Enter your message"  onChange={(e)=>{onFormUpdate('message', e.target.value)}}></textarea>
                                <button type="submit"><span>{submitButton}</span></button>
                            </Col>
                            
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact