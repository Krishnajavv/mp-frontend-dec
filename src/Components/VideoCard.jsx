import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import {  Modal } from 'react-bootstrap';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCatagory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    setShow(true)
    const {caption,link}=video

    let today=new Date()
    let timeStamp= new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit'
  ,minute:'2-digit',second:'2-digit'}).format(today)

  let videoHistory={caption,link,timeStamp}
  //make API call
  await addVideoHistoryAPI(videoHistory) 

  }
const removeVideo=async(id)=>{
  await deleteVideoAPI(id)
  setDeleteVideoResponse(true)

}
const dragStarted =(e,id)=>{
  console.log("Drag started.. video id:"+id);
  e.dataTransfer.setData("videoId", id)
}



  return (
    <div>

<Card draggable onDragStart={e=>dragStarted(e,video?.id)} >
      <Card.Img height={'200px'} variant="top" onClick={handleShow} src={video?.url} />
      <Card.Body className='bg-black'>
        <Card.Title className='d-flex justify-content-between align-items-center'><h5>{video?.caption}</h5>
       
         {insideCatagory?null:<button className='btn' onClick={()=>removeVideo(video?.id)} ><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card> 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="393" src={`${video?.link}?autoplay=1`} title="LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe></Modal.Body>
       
      </Modal>
    </div>
  )
}

export default VideoCard