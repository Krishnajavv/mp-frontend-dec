import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllCategoryAPI, getAllUploadedVideosAPI, updateCategoryAPI } from '../../services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {

  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  const [allVideos,setAllVideos]=useState([])

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)

  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos = async ()=>{
    const result= await  getAllUploadedVideosAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }else{
      console.log("API failed");
      setAllVideos([])
    }
  }

  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDropped= async (e)=>{
    const{videoId,catagoryId} =JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,catagoryId);
    const {data}= await  getAllCategoryAPI()
    const selectedCatagory =data.find(item=>item.id==catagoryId)
    let result=selectedCatagory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let {id,catagoryName}=selectedCatagory
    let newCatagory ={id,catagoryName,allVideos:result}
    console.log(newCatagory);
    const res=await updateCategoryAPI(catagoryId,newCatagory)
    setDropVideoResponse(res)

  }


  return (
    <>
    <Row  droppable="true"  onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
      { allVideos?.length>0?allVideos.map(video=>(
      <Col sm={12} md={4} lg={3} xl={3}>
      <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
      </Col>
      )):<p className='text-danger fw bold'>nothing to display</p>
      }      
    </Row>
    </>
  )
}

export default View