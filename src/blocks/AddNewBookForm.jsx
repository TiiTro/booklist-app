import React from 'react';
import Input from '../snippets/Input';
import Button from '../snippets/Button';

const AddNewBookForm = (props) => {
  const {
    bookTitle,
    bookAuthor,
    bookComments,
	  handlebookTitle,
	  handlebookAuthor,
    handlebookComments,
    submit,
    onSubmit
  } = props;

  return (
    <div>
      <h3>Lisää kirja</h3>
      <form onSubmit={onSubmit}>
		    <Input 
		    	label={"Kirjan nimi"}
			    value={bookTitle}
          onChange={handlebookTitle}
			    />
		    <br></br>
			  <Input 
		    	label={"Kirjoittaja"}
			    value={bookAuthor}
          onChange={handlebookAuthor}
			  />
          <br></br>
          <Input 
		    	label={"Kommentit"}
			    value={bookComments}
          onChange={handlebookComments}
			  />
          <Button 
            type={submit}
            buttonText={"Tallenna"}/>
	    </form>
    </div>
)}

export default AddNewBookForm;