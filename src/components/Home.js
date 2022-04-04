import React, {useEffect, useState} from 'react';
import '../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import CardHome from "./CardHome";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, -600)
    }, [])
    const [cardtext, setcardtext] = useState([{
        id:1,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
    },
        {
            id:2,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        },
        {
            id:3,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        }
        ,{
            id:4,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        },
        {
            id:5,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        },
        {
            id:6,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        },
        {
            id:7,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        },{
            id:8,imgUrl:'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w', price:'250$', title:'Blushing White Bunny', description:'Short description. Very short description. Very very short description.'
        }])
    return (
        <div>
            <Container>

                <Row lg={4}>
                    {cardtext.map((post => <CardHome post={post} key={post.id}/>))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;