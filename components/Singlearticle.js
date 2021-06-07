import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Singlearticle = ({article})=>{
    // console.log(article);

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
    if(article.video_link!==""){
        image00 = <img className = "play_audio_img" onClick={openModal} data-image = {article.video_link} src = "/play.png"/>
    }                                 
   
    return (
        <>
              <Container className="mt-5">
                    <Card className="card">
                    <div className = "card-img-wrap">
                    <Card.Img variant="top" src={"https://app.realtywired.show/public/uploads/"+article.thumbnail} />
                    {image00}
                    </div>
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <p className = "text-center">
                             {article.description}
                            </p>
                        </Card.Body>
                    </Card>
            </Container>
        </>

    );//return}
}
export default Singlearticle;