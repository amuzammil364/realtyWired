import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Allarticles = ({articles})=>{
    console.log(articles);
    return (
        <>

            <Container className="mt-5">
                <h1>Most Recent</h1>
                <Link href = {"/article/"+articles.topVideo.id}>
                    <a>
                    <Card className="card" key={articles.topVideo.id}>
                        <Card.Img variant="top" src={articles.topVideo.thumbnail} />
                        <Card.Body>
                            <Card.Title>{articles.topVideo.title}</Card.Title>
                        </Card.Body>
                    </Card>
                    </a>
                </Link>
            <div className="divider"></div>

            </Container>

            <Container className="mt-5">
                    {
                        articles.catVideos.map((catVideo, index) => {
                            
                                return <div className="wrap" key = {index}>
                                    <h1 className = "mt-4">{catVideo.category.name}</h1>
                                    <Row className="mt-4">
                                        <Col key={catVideo.videos[0].id}>
                                            <Link href={'/article/' + catVideo.videos[0].id}>
                                                <a>
                                                <Card className="card" >
                                                    <Card.Img variant="top" src={catVideo.videos[0].thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{catVideo.videos[0].title}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                </a>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                    {
                                        
                                          catVideo.videos.map((video,index2)=>{
                                            // console.log(video)
                                            if(index2 !=0){
                                            return <Col md={6} className="mt-4" key={video.id}>
                                            <Link href={'/article/' + video.id}>
                                                <a>
                                                <Card className="card">
                                                    <Card.Img variant="top" src={video.thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{video.title}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                </a>
                                            </Link>
                                        </Col>
                                            }//for videos
                                          })  
                                        }

                                    </Row>
                                    <div className = "divider"></div>
                                </div>
                        })
                    }


                </Container>





        </>

    );//return}
}
export default Allarticles;

