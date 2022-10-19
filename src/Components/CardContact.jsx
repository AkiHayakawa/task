import React from "react";
import { Card, Button } from "react-bootstrap";

const CardContact = ({ item, deleteProduct }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.name>{item.name}</Card.name>
        <Card.Text>
          age: {item.age}$<br />
          LastNameription:{item.LastName}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button className="mx-1" variant="secondary">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardContact;
