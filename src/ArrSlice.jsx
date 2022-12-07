import React, { useState } from "react";
import Input from "./Input";

const ArrSlice = () => {
  // const [colors, setColors] = useState(["red", "green"]);
  
  const [books, setBooks] = useState([
    { id: 1, title: 'Sense and Sensibility' },
    { id: 2, title: 'Oliver Twist' },
  ]);

  const handleSubmit = (id) => {
    console.log({id})
    const updatedBooks = books.filter((book) => book.id !== id );
    setBooks(updatedBooks);
  };
 
  // const addColorAtIndex = () => {
  //   const updateColors = [...colors.slice(0, 2),
  //      "white", 
  //      ...colors.slice(2)
  //     ];
  //   setColors(updateColors);
  // };

  
  const renderedColors = books.map((book) => {
    return <li key={book.id}>{book.id}</li>
});
  return (
    <>
      <div>Hi</div>
      {/* <div>
        <button onClick={addColorAtIndex}>add</button>
      </div>
      {console.log(colors)} */}
       <Input onSubmit={handleSubmit} />
         <ul>
        {renderedColors}
      </ul>
    </>
  );
};

export default ArrSlice;
