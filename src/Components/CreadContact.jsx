import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";

const CreadContact = (props) => {
  const { addProduct } = props;

  const [name, setname] = useState("");
  const [LastName, setDecs] = useState("");
  const [age, setage] = useState("");
  const [image, setImage] = useState("");

  function createProduct() {
    let newObj = {
      name,
      LastName,
      age,
      image,
      id: Date.now(),
    };

    addProduct(newObj);

    setname("");
    setDecs("");
    setage("");
    setImage("");
  }

  return (
    <>
      <div className="form">
        <FormControl
          className="my-3"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <FormControl
          className="my-3"
          placeholder="LastName"
          value={LastName}
          onChange={(e) => setDecs(e.target.value)}
        />
        <FormControl
          className="my-3"
          placeholder="age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <FormControl
          className="my-3"
          placeholder="iamge"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button variant="dark" onClick={createProduct}>
        Add
      </Button>
    </>
  );
};

export default CreadContact;
