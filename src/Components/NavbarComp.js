// NavbarComp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const NavbarComp = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchInput, setSearchInput] = useState("");

    const handleCategorySelect = (category) => {
        setSearchInput(category);
    };

    const handleSearchClick = () => {
        // Perform search action with the current searchInput value
        console.log("Search clicked:", searchInput);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top navigation-custom'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='pt-3' src={logo} alt="logo" width={110} /></Navbar.Brand>
                    <Nav className="me-auto mt-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/fresh">Fresh</Nav.Link>
                        <Nav.Link as={Link} to="/primevideo">Prime Video</Nav.Link>
                        <Nav.Link as={Link} to="/minitv">Mini Tv</Nav.Link>
                        <div className="form ms-3">
                            <InputGroup className="mb-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark">
                                        {selectedCategory}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                        {categories.map((category, index) => (
                                            <Dropdown.Item key={index} onClick={() => handleCategorySelect(category)}>
                                                {category}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Amazon.in"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    style={{ width: '500px' }}
                                />
                                <Button variant="dark" onClick={handleSearchClick}>Search</Button>
                            </InputGroup>
                        </div>
                    </Nav>
                    <div className="button">
                        <Button className='me-3' variant="outline-light" as={Link} to="/login">Login</Button>
                        <Button variant="outline-light">Sign Up</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

const categories = [
    "All",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Audible Audiobooks",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "MP3 Music",
    "Music",
    "Musical Instruments",
    "Office Products",
    "Pet Supplies",
    "Prime Video",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Subscribe & Save",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches"
];

export default NavbarComp;
