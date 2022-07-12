import React from "react";
import { Button } from "react-bootstrap";
import "./deletecontactmodel.css";
import CloseIcon from '@mui/icons-material/Close';
const DeleteContactModel = ({ show, handleClose, handleDelete }) => {
  return (
    <>
      <div
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        centered
        className="delete-model__background"
      >
        <div className="delete__main-container">
          <div className="delete__container">
            <div className="delete__title">
              <h3>Confirm Delete</h3>
              <CloseIcon className="delete__button" onClick={handleClose}>
               
              </CloseIcon>
            </div>

            <div className="delete__model">
              <p>Are you sure you want to delete this contact ? </p>
            </div>
            <div className="delete-model__button">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteContactModel;
