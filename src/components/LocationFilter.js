import React, { useState } from 'react'
import locationIcon from '../assets/location_on-24px.png'
import editIcon from "../assets/edit-24px.png"
import clearIcon from "../assets/clear-24px.png"
import infoIcon from '../assets/error_outline-24px.png'
import {Row,Col,Button} from "react-bootstrap"
import Image from "../assets/thumb.png";
import Image2 from "../assets/follow-img.png";
import Image3 from "../assets/follow-img2.png";
import Image4 from "../assets/follow-img3.png";
import Image5 from "../assets/follow-img4.png";
import { useAuth } from '../context/auth-context'
const LocationFilter = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputLocation, setInputLocation] = useState('');
    const {joinToggle} = useAuth();
  return (
   
    <div className='d-none d-sm-flex flex-column' style={{width: "18vw"}}>
        <div className='d-flex justify-content-between align-items-center gap-4 border-bottom py-2 px-1 my-3'>
           <div className='d-flex align-items-center gap-2'>
           <img src={locationIcon} alt="location icon" />
            <input placeholder='Enter Your Location' className='border-0' value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} onFocus={() => setIsInputFocused(true)} onBlur={() => setIsInputFocused(false)} />
           </div>

           <div>
            {
                isInputFocused ?  <img src={editIcon} alt="edit icon" /> : <img src={clearIcon} alt="clear icon" onClick={() => setInputLocation("")} /> 
            }
           
           </div>
        </div>


        <div className='d-flex gap-2 mt-4'>
          <img src={infoIcon} alt="info icon" className='img-fluid' style={{width: "20px", height:"20px"}} />
          <p className='opacity-50' style={{fontSize: "0.8vw", paddingTop: "-100px"}} >Your location will help us serve better and extend a personalised experience.</p>'
        
        </div>
        {
          joinToggle ? (
          <>
        <Row className='gap-2'>
       <Col lg={12}> <img src={Image} alt="thumbs-up-icon" width={30}></img> Recommended Groups</Col> 
       </Row>
       <Row className='mt-3'>
            <Col  ><img src={Image2} alt="follow1" ></img> <span style={{paddingLeft:"5px"}}>Leisure</span></Col>
            
            <Col><Button variant="secondary" style={{color:"black",backgroundColor:"#EDEEF0",borderRadius:"50px"}}>Follow</Button>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col  ><img src={Image3} alt="follow1"></img> <span style={{paddingLeft:"5px"}}>Activism</span></Col>
            
            <Col><Button variant="secondary" style={{color:"black",backgroundColor:"#EDEEF0",borderRadius:"50px"}}>Follow</Button>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col  ><img src={Image4} alt="follow1"></img><span style={{paddingLeft:"5px"}}>MBA</span></Col>
            
            <Col><Button variant="secondary" style={{color:"black",backgroundColor:"#EDEEF0",borderRadius:"50px"}}>Follow</Button>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col  ><img src={Image5} alt="follow1"></img><span style={{paddingLeft:"5px"}}>Philosophy</span></Col>
            
            <Col><Button variant="secondary" style={{color:"black",backgroundColor:"#EDEEF0",borderRadius:"50px"}}>Follow</Button>
            </Col>
          </Row>
          <Row className='mt-3 justify-content-end'>
              <Col lg={6}>
              </Col>
<Col><p style={{color:"blue"}}>See more...</p></Col>
          </Row>
          </>
          ):( <h1></h1>
          )}
    </div>
   
  )
}

export default LocationFilter