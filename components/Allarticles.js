import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Allarticles = ({articles})=>{
    // console.log(articles);
    const openModal =(e)=>{
        let RW_video_modal = document.getElementById('RW_video_modal');
        RW_video_modal.classList.add('active');
        let player = RW_video_modal.querySelector('#modal_video');
        let videoo_link = e.target.getAttribute('data-image');
        let modal_video_source = document.getElementById('modal_video_source');
        modal_video_source.setAttribute('src',videoo_link);
        console.log(player);
        player.play();
        
    }

    let image00 = "";
    if(articles.topVideo.video_link!==""){
        image00 = <img className = "play_audio_img" onClick={openModal} data-image = {articles.topVideo.video_link} src = "/play.png"/>
    }                                 

    return (
        
    <>      
            <Container className="mt-5">
                <h1>Most Recent</h1>
                    <Card className="card" key={articles.topVideo.id}>
                    <div className = "card-img-wrap">                   
                        <Card.Img variant="top" src={articles.topVideo.thumbnail} />
                        {image00}         
                    </div>
                    <Link href = {"/article/"+articles.topVideo.id}>
                        <a>
                        <Card.Body>
                            <Card.Title>{articles.topVideo.title}</Card.Title>
                        </Card.Body>
                        </a>
                    </Link>

                    </Card>
            <div className="divider"></div>

            </Container>

            <Container className="mt-5">
                    {
                        articles.catVideos.map((catVideo, index) => {
                                let image = "";
                                if(catVideo.videos[0].video_link!==""){
                                image = <img className = "play_audio_img" onClick={openModal} data-image = {catVideo.videos[0].video_link} src = "/play.png"/>
                                }                                 
                                return <div className="wrap" key = {index}>
                                    <h1 className = "mt-4">{catVideo.category.name}</h1>
                                    <Row className="mt-4">
                                        <Col key={catVideo.videos[0].id}>
                                                <Card className="card" >
                                                <div className = "card-img-wrap">
                                                    <Card.Img variant="top" src={catVideo.videos[0].thumbnail} />
                                                    {image}
                                                </div>
                                                <Link href={'/article/' + catVideo.videos[0].id}>
                                                    <a>
                                                    <Card.Body>
                                                        <Card.Title>{catVideo.videos[0].title}</Card.Title>
                                                    </Card.Body>
                                                    </a>
                                                </Link>

                                                </Card>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                    {
                                        
                                          catVideo.videos.map((video,index2)=>{
                                            // console.log(video)
                                            if(index2 !=0){
                                                let image0 = "";
                                                if(video.video_link!==""){
                                                image0 = <img className = "play_audio_img" onClick={openModal} data-image = {video.video_link} src = "/play.png"/>
                                                }                                 
                
                                            return <Col md={6} className="mt-4" key={video.id}>
                                                <Card className="card">
                                                <div className = "card-img-wrap">
                                                <Card.Img variant="top" src={video.thumbnail} />
                                                {image0}
                                                </div>
                                                <Link href={'/article/' + video.id}>
                                                    <a>
                                                    <Card.Body>
                                                        <Card.Title>{video.title}</Card.Title>
                                                    </Card.Body>
                                                    </a>
                                                </Link>

                                                </Card>
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

