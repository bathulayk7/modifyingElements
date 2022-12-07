import React, { useState } from 'react';
import { EditForm } from './EditForm';
import { Input } from './Input';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function ModifyingElements() {
  const [books, setBooks] = useState([
      { id: 10, title: 'Harry Potter' }, // Don't change
      { id: 17, title: 'Hunger Games' },
      { id: 54, title: 'Dark Tower' }
  ]);
  
  const updateBookById = (id, title) => {
    // TODO: Find a book in the 'books' array with the given id
    // Update that books 'title' property
    // Don't forget to update the 'books' state by calling 'setBooks'
    const updateBook=books.map((book)=>{
        if(book.id===id){
            return {...book,title:title}
        }
        return book
    })
    setBooks(updateBook)
  };
  
  const addBook = (title) => {
    const book = { title: title, id: ~~(Math.random() * 1000) };
    setBooks([...books, book])
  };
  
  const renderedBooks = books.map((book, i) => {
      return <li key={book.id}>Title: {book.title}, Id: {book.id}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addBook} />
      <ol>
        {renderedBooks}
      </ol>
      <hr />
      <EditForm colors={books} onSubmit={updateBookById}  />
    </div>
  );
}

export default ModifyingElements;
