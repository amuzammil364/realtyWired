import React from 'react';
import Link from "next/link";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = ({categories})=>{
    // console.log(categories);
    return (
        <Navbar expand="lg">
        <Link href = "/" className = "navbar-brand"><a><img className = "site_logo" src = "/logo.png"/></a></Link>
            {/* <Navbar.Brand>RealtyWired</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* <Link href = "/category/1" className = "nav-link">Traditional Re</Link>                    
                    <Link href = "/category/2" className = "nav-link">REO</Link>                    
                    <Link href = "/category/3" className = "nav-link">Videos</Link>                    
                    <Link href = "/category/4" className = "nav-link">Re News</Link>                     */}
                    {
                        categories.map(category=>{
                            return <Link className = "nav-link" key={category.category.id} href = {"/category/"+category.category.id}><a>{category.category.name}</a></Link>
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );

}
export default Navigation