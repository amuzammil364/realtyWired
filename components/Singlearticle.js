import React from "react";
import { Button, Navbar, Nav, NavDropdown, Container, Card, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const Singlearticle = ({article})=>{
    console.log(article);
    return (
        <>
              <Container className="mt-5">
                    <Card className="card">
                        <Card.Img variant="top" src={"https://app.realtywired.show/public/uploads/"+article.thumbnail} />
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