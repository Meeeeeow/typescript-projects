import React , {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
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
  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    setSubmitButton('Sending...');
    let response = await fetch("http://localhost:5000/contact",{
        method: "POST",
        headers:{
            "Content-Type" : "Application/json;character=utf-8",
        },
        body: JSON.stringify(formDetails)
    });
    setSubmitButton("Send");
    let result = await response.json();
    setFormDetails({
        firstName: '',
        lastName : '',
        email:'',
        phone:'',
        message:''
    });
    if(result.code === 200){
        setStatus({success:true , message : 'Message  sent successfully'});
    }else{
        setStatus({success:true , message : 'Message  sent successfully'});
    }
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
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Enter your first name"
                                onChange={(e)=>{onFormUpdate('firstName', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} placeholder="Enter your last name"
                                    onChange={(e)=>{onFormUpdate('lastName', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" value={formDetails.email} placeholder="Enter your email address"
                                    onChange={(e)=>{onFormUpdate('email', e.target.value)}}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" value={formDetails.phone} placeholder="Enter your phone No."
                                    onChange={(e)=>{onFormUpdate('phone', e.target.value)}}/>
                            </Col>
                            <Col className='px-1'>
                                <textarea rows={6} value={formDetails.message} placeholder="Enter your message"  onChange={(e)=>{onFormUpdate('message', e.target.value)}}></textarea>
                                <button type="submit"><span>{submitButton}</span></button>
                            </Col>
                            {
                                status.message && (
                                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                )
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact