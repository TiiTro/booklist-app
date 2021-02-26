import React from 'react';
import Input from '../snippets/Input';
import Button from '../snippets/Button';

const AddNewBookForm = (props) => {
  const {
    newTitle,
    newAuthor,
    newCom,
    onSubmit,
	  handleNewTitle,
	  handleNewAuthor,
    handleNewCom,
    submit
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
          {/* <br></br>
          <Input 
		    	label={"Kommentit"}
			    value={newCom}
          onChange={handleNewCom}
			  /> */}
          <Button 
            type={submit}
            buttonText={"Tallenna"}/>
	    </form>
    </div>
)}

export default AddNewBookForm;