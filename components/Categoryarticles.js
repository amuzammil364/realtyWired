import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Categoryarticles = ({articles})=>{
    console.log(articles)
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
                                            return <Col className="mt-4" key={article.id}>
                                            <Link href={'/article/' + article.id}>
                                                <a>
                                                <Card className="card">
                                                    <Card.Img variant="top" src={article.thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{article.title}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                </a>
                                            </Link>
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
                                            return <Col md={6} className="mt-4" key={article.id}>
                                            <Link href={'/article/' + article.id}>
                                                <a>
                                                <Card className="card">
                                                    <Card.Img variant="top" src={article.thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{article.title}</Card.Title>
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
                        
                    


                </Container>



        </>

    );//return}
}
export default Categoryarticles;