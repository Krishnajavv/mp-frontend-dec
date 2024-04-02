import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catagory from '../Components/Catagory'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState({})
  const [dropVideoResponse, setDropVideoResponse]= useState({})
  return (
    <div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link to={'/watchhistory'} style={{color:'darkred',textDecoration:'none',fontSize:'30px'}}>Watch-History<i class="fa-solid fa-arrow-right-to-bracket"></i></Link>

      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h2>All Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />

        </div>
        <div className="catagory col-lg-3">
          <Catagory dropVideoResponse={dropVideoResponse}/>

        </div>

      </div>
    </div>
  )
}

export default Home