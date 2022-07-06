import React from "react";
import './contactbutton.css'
import { Button } from "react-bootstrap";
import { PencilIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/outline";


const ContactButton = ({
  btnIcon,
  btnText,
  setIsEdit,
  btnType,
  setModalShow,
}) => {
  return (
    <>
      <Button
        title={btnType === "add" ? "Add Contact" : "Edit Contact"}
        variant="default"
        onClick={() => {
            setModalShow(true);
          btnType === "add" ? setIsEdit(false) : setIsEdit(true);
        }}
        className="custom-btn"
      >
        {btnIcon === "pencil" ? (
          <PencilIcon className="custom-btn-icons align-middle" />
        ) : btnIcon === "plus" ? (
          <PlusIcon className="custom-btn-icons align-middle " />
        ) : null}
        {btnText}
      </Button>
    </>
  );
};

export default ContactButton;
