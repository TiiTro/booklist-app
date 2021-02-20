import React from 'react';
import Input from '../snippets/Input';
import Button from '../snippets/Button';

const AddNewBookForm = (props) => {
  const {
    newTitle,
    newAuthor,
    onSubmit,
	  handleNewTitle,
	  handleNewAuthor,
    submit,
    buttonText 
  } = props;

  return (
    <div>
      <h3>Add new book</h3>
      <form onSubmit={onSubmit}>
		    <Input 
		    	label={"Kirjan nimi"}
			    value={newTitle}
          onChange={handleNewTitle}
			    />
		    <br></br>
			  <Input 
		    	label={"Kirjoittaja"}
			    value={newAuthor}
          onChange={handleNewAuthor}
			    />
          <Button 
            type={submit}
            buttonText={"Tallenna"}/>
	    </form>
    </div>
)}

export default AddNewBookForm;