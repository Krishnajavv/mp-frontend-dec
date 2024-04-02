import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <div>

      <Row className="mt-4 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab laudantium, officiis quae corrupti recusandae officia? Saepe magnam veritatis minima corporis molestias eius laboriosam, eligendi necessitatibus non! Incidunt, assumenda maxime.</p>
          <button onClick={()=>navigateByUrl('./home')} className='btn btn-danger mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height={'400px'} width={'400px'} alt="" />
        </Col>
        <Col></Col>

      </Row>
      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between flex-column">
        <h3>Features</h3>
        <div className="mt-5 mb-5 d-flex flex-wrap justify-content-around "  >
          
        <Card style={{ width: '22rem', margin: '10px'}} className='p-4 bg-danger'>
      <Card.Img variant="top" src="https://24.media.tumblr.com/d36278415ea2632bb223d8e736a93a6b/tumblr_n6akz39WvM1shpedgo1_500.gif"  height={'300px'} width={'300px'} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Card style={{ width: '22rem', margin: '10px' }}  className='p-4 bg-danger'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946"  height={'300px'} width={'300px'} />
      <Card.Body>
        <Card.Title>Catagorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Card style={{ width: '22rem', margin: '10px' }}  className='p-4 bg-danger'>
      <Card.Img variant="top" src="https://media4.giphy.com/media/XMaB779YCmP9m/giphy.gif" height={'300px'} width={'300px'} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

        </div>

      </div>
      <div className="container border rounded border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning mt-3'>Simple,Powerfull & Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores similique eligendi vel facilis ipsa. Corporis in illo minima. Dignissimos, suscipit iusto consequuntur quo corrupti doloribus amet nobis ab laboriosam blanditiis?</h6>
          
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Catagorized Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores similique eligendi vel facilis ipsa. Corporis in illo minima. Dignissimos, suscipit iusto consequuntur quo corrupti doloribus amet nobis ab laboriosam blanditiis?</h6>
          
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores similique eligendi vel facilis ipsa. Corporis in illo minima. Dignissimos, suscipit iusto consequuntur quo corrupti doloribus amet nobis ab laboriosam blanditiis?</h6>
          
        </div>
        <div className="video col-lg-5">
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/gh3FyLT7WVg" title="Kurchi Madathapetti Full Video Song | Guntur Kaaram | Mahesh Babu | Sreeleela | Trivikram | Thaman S" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        
        </div>

      </div>
    </div>
  )
}

export default LandingPage