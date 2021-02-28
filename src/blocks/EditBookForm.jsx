import React from 'react';
import Modal from 'react-modal';
import Input from '../snippets/Input';
import Button from '../snippets/Button';

const EditBookForm = (props) => {
  const {
    editedTitle,
    editedAuthor,
    editedCom,
	  handleEditedTitle,
	  handleEditedAuthor,
    handleEditedComment,
    submit,
    onSubmit,
    handleSave,
    handleCancel,
    modalIsOpen
  } = props;

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h3>Muokkaa kirjaa</h3>
        <form onSubmit={onSubmit}>
		      <Input 
		      	label={"Kirjan nimi"}
			      value={editedTitle}
            onChange={handleEditedTitle}
			      />
		      <br></br>
			    <Input 
		      	label={"Kirjoittaja"}
			      value={editedAuthor}
            onChange={handleEditedAuthor}
			    />
          <br></br>
          <Input 
		      	label={"Kommentit"}
			      value={editedCom}
            onChange={handleEditedComment}
			    />
          <div style={{ display: "flex", flexDirection: "row"}}>
            <Button
              value={"Tallenna"}
              buttonText={"Tallenna"}
              onClick={handleSave}
            />
            <Button
              value={"Peruuta"}
              buttonText={"Peruuta"}
              onClick={handleCancel}
            />
          </div>
	      </form>
      </Modal>
      
    </div>
)}

export default EditBookForm;