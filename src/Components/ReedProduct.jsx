import React from "react";
import CardContact from "./CardContact";

const ReedContact = ({ contacts, deleteProduct }) => {
  return (
    <>
      <center style={{ fontSize: "30px", margin: "20px" }}>contacts</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts?.map((item) => (
          <CardContact
            key={item.id}
            item={item}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </>
  );
};

export default ReedContact;
