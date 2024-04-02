import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI'

function WatchHistory() {

const [history, setHistory]=useState([])

useEffect(()=>{
  getHistory()

},[])

const getHistory=async()=>{
  const result=await getHistoryAPI()
  if(result.status===200){
    setHistory(result.data)
  }else{
    console.log("API Failed");
    console.log(result.message);
  }
}

const removeVideoHistory= async(id)=>{
  await deleteHistoryAPI (id)
  getHistory()
}


  return (
    <div>

      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h2>Watch-History</h2>
        <Link style={{textDecoration:'none', color:'darkred',fontSize:'25px'}}>Back to Home<i className='fa-solid fa-arrow-rotate-left fa-beat-fade'></i></Link>
      </div>
      <table className='table mb-5 shadow container w-100 '>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history?.map((video,index)=>(
              <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'></a></td>
            <td>{video?.timeStamp}</td>
            <td><button className='btn' onClick={()=> removeVideoHistory(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>


            )):<p className='text-danger fw-bold'>Nothing To Display</p>

          }
          
        </tbody>
      </table>
    </div>
  )
}

export default WatchHistory