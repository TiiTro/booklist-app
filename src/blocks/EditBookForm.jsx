import React from 'react';
import Modal from 'react-modal';
import Input from '../snippets/Input';
import Button from '../snippets/Button';
import Book from '../snippets/Book';


const EditBookForm = (props) => {
  const {
    editableTitle,
    editableAuthor,
    editableComment,
	  handleNewTitle,
	  handleNewAuthor,
    handleNewCom,
    submit,
    onSubmit,
    handleSave,
    handleCancel,
    modalIsOpen,
    setModalIsOpen,
  } = props;

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h3>Muokkaa kirjaa</h3>
        <form onSubmit={onSubmit}>
		      <Input 
		      	label={"Kirjan nimi"}
			      value={editableTitle}
            onChange={handleNewTitle}
			      />
		      <br></br>
			    <Input 
		      	label={"Kirjoittaja"}
			      value={editableAuthor}
            onChange={handleNewAuthor}
			    />
            <br></br>
            <Input 
		      	label={"Kommentit"}
			      value={editableComment}
            onChange={handleNewCom}
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
              onClick={() => setModalIsOpen(false)}
            />
          </div>
	      </form>
      </Modal>
      
    </div>
)}

export default EditBookForm;