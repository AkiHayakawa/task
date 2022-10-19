import React, { useState } from "react";
import CreadContact from "./components/CreadContact";
import ReedContact from "./components/ReedContact";


const App = () => {
  const [contacts, setcontacts] = useState([]);

  function addProduct(newObj) {
    let newcontacts = [...contacts];
    newcontacts.push(newObj);
    console.log(newcontacts);
    setcontacts(newcontacts);
  }

  function deleteProduct(id) {
    let newcontacts = [...contacts];
    newcontacts = newcontacts.filter((item) => item.id !== id);
    setcontacts(newcontacts);
  }

  // }
  return (
    <>
      <CreadContact addProduct={addProduct} />
      <ReedContact contacts={contacts} deleteProduct={deleteProduct} />
    </>
  );
};
// Создать ContactBook при помощи useState:

// -Реализовать весь функционал CRUD:
// ---Create (Создание контакта)
// ---Read (Вывести список контактов)
// ---Update (Сделать редактирование)
// ---Delete (Сделать удаление
export default App;
