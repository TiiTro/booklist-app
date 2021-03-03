import React from 'react';
import Modal from 'react-modal';
import Input from '../snippets/Input';
import Button from '../snippets/Button';

const EditBookForm = (props) => {
  const {
    bookTitle,
    bookAuthor,
    bookComments,
	  handlebookTitle,
	  handlebookAuthor,
    handlebookComments,
    submit,
    onSubmit,
    modalIsOpen,
    closeModal
  } = props;

  

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h3>Muokkaa kirjaa</h3>
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
          <div style={{ display: "flex", flexDirection: "row"}}>
            <Button
              type={submit}
              value={"Tallenna"}
              buttonText={"Tallenna"}
              // onClick={handleSave}
            />
            <Button
              value={"Peruuta"}
              buttonText={"Peruuta"}
              onClick={closeModal}
            />
          </div>
	      </form>
      </Modal>
      
    </div>
)}

export default EditBookForm;