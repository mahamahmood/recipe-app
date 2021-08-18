import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import { Card, Button } from 'react-bootstrap';

function Recipes() {
  return (
    <div className="App">
      <NavBar />
      <Link to={"/"}>Back to Home Page</Link>
      <h1>Recipes App</h1>
      <Link to={"/create-recipe"}>Create a Recipe</Link>
      <br />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
export default Recipes;
