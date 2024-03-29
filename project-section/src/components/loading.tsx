import React,{useState , useEffect} from 'react'
import { useEventListener } from 'usehooks-ts';
import { useNavigate } from "react-router-dom";
import space from '../assests/img/rocket1.png';
import './loadking.css';
const Loading = () => {
    const styles ={
        overflow: 'hidden'
    }
    const [keyPressed,setKeyPressed] = useState<boolean>(false);
    console.log(keyPressed);
    useEffect(() =>{

        return ()=>{
            setKeyPressed(false);
        }
    },[])

    const onKeyDown  = (e:Event) =>{
        console.log(`key down ${e}`);
        setKeyPressed(true);
    }

    useEventListener('keydown',onKeyDown);

    const navigate = useNavigate();
    useEffect(() => {
        if(keyPressed){
           setTimeout(() => {
                navigate('/projects');
           },8000);
        }
    },[keyPressed,navigate]);

  return (
    <section className={`loading ${keyPressed ? 'load-alter' : ''}`} style={styles}>
        <>
            <div className={`container ${keyPressed ? 'active' : ''}`}>
                <div className="rocket">
                    <img src={space} alt="rocket"></img>
                </div>
            </div>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <span className='loader'></span>
            <h3 className='text-edit'>Press any key to continue</h3>
           
        </>
    </section>
  )
}

export default Loading