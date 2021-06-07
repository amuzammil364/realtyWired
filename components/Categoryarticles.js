import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Categoryarticles = ({articles})=>{
    // console.log(articles)
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

    return (
        <>
            <Container className="mt-5">
                  
                            
                                 <div className="wrap">
                                    <h1 className = "mt-4"></h1>
                                    <Row className="mt-4">
                                    {
                                        
                                        articles.map((article,index)=>{
                                            // console.log(video)
                                            if(index == 0){
                                            let image = "";
                                              if(article.video_link!==""){
                                                 image = <img className = "play_audio_img" onClick={openModal} data-image = {article.video_link} src = "/play.png"/>
                                              }      
                                            return <Col className="mt-4" key={article.id}>
                                                <Card className="card">
                                                    <div className = "card-img-wrap">
                                                        <Card.Img variant="top" src={article.thumbnail} />
                                                        {image}
                                                    </div>
                                                <Link href={'/article/' + article.id}>
                                                    <a>
                                                    <Card.Body>
                                                        <Card.Title>{article.title}</Card.Title>
                                                    </Card.Body>
                                                    </a>
                                                </Link>

                                                </Card>
                                        </Col>
                                            }
                                          })  
                                        }
                                    </Row>
                                    <Row className="mt-4">
                                    {
                                        
                                        articles.map((article,index2)=>{
                                            // console.log(video)
                                            if(index2 !=0){
                                                let image = "";
                                                if(article.video_link!==""){
                                                   image = <img className = "play_audio_img" onClick={openModal} data-image = {article.video_link} src = "/play.png"/>
                                                }      
  
                                            return <Col md={6} className="mt-4" key={article.id}>
                                                <Card className="card">
                                                    <div className = "card-img-wrap">
                                                        <Card.Img variant="top" src={article.thumbnail} />
                                                        {image}
                                                    </div>
                                                    <Link href={'/article/' + article.id}>
                                                    <a>

                                                    <Card.Body>
                                                        <Card.Title>{article.title}</Card.Title>
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
                        
                    


                </Container>



        </>

    );//return}
}
export default Categoryarticles;