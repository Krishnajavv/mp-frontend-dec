import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { addCatagoryAPI, deleteCategoryAPI, getAVideoAPI, getAllCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard'


function Catagory({dropVideoResponse}) {
  const[allCatagories,setAllCatagories]=useState([])
const [catagoryName,setCatagoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleAdd =async() =>{
  if(catagoryName){
    const result= await addCatagoryAPI({catagoryName,allVideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      setCatagoryName("")
      getCatagory()
    }else{
      alert(result.message)
    }
  }else{
    alert("please fill the category field")
  }
}

// catagory

useEffect(()=>{
getCatagory()
},[dropVideoResponse])

const getCatagory= async()=>{
  const {data}=await getAllCategoryAPI()
  setAllCatagories(data)

}
const removeCatagory=async(id)=>{
  await deleteCategoryAPI(id)
  getCatagory()
}
const dragOver=(e)=>{
  console.log("video card dragged over the catagory");
  e.preventDefault()
}
const videoDrop=async(e,catagoryId)=>{
  const videoId =e.dataTransfer.getData("videoId")
  console.log("video Id:"+videoId, "dropped inside catagory"+catagoryId);
  const {data}= await getAVideoAPI(videoId)
 // console.log(data);
 const selectedCatagory=allCatagories.find(item=>item.id===catagoryId)
 selectedCatagory.allVideos.push(data)
 //console.log(selectedCatagory);
 await updateCategoryAPI(catagoryId,selectedCatagory)
 getCatagory()
}
const videoDragStarted =(e,videoId,catagoryId)=>{
  let dataShare={videoId,catagoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}

console.log(allCatagories);
  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-danger ' onClick={handleShow}>Add Catagory</button>
</div>

{allCatagories?.length>0?allCatagories.map(Catagory=>(
  <div className='border rounded p-3 mt-2' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,Catagory?.id)}>
    <div className='d-flex justify-content-between align-items-center'>
      <h6>{Catagory?.catagoryName}</h6>
      <button className='btn' onClick={()=>removeCatagory(Catagory?.id)}> <i className='fa-solid fa-trash text-danger'></i></button>

    </div>
    <Row>
      {
       Catagory?.allVideos?.length>0?Catagory?.allVideos.map(Card=>(

        <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,Card.id,Catagory.id)}>
         <VideoCard video={Card} insideCatagory={true}/>

        </Col>
       )):null
      }


    </Row>

  </div>
)):<p className='text-danger fw-bolder'>no catagories yet!!</p>}

    

<Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
centerd
>
<Modal.Header closeButton>
  <Modal.Title>Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
 <Form>
 <Form.Control type="email" placeholder="Catagory Name" onChange={e=>setCatagoryName(e.target.value)} />
 </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleAdd}>Add</Button>
</Modal.Footer>
</Modal>

</>
  )
}

export default Catagory