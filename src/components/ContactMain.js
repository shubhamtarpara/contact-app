import React from "react";
import { useState, useEffect } from "react";

import ContactButton from "./ContactButton";
import ContactInfo from "./ContactInfo";
import SearchBar from "./SearchBar";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import DeleteModel from "./DeleteModel";

import contactbook from "../icons/contactbook.png";
// import { Button } from "react-bootstrap";
// import { TrashIcon } from "@heroicons/react/outline";

import "./contactmain.css";

const ContactMain = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [
          {
            id: "_" + Math.random().toString(36).substr(2, 9),
            firstname: "Miriko",
            lastName: "Hussoe",
            email: "Miriko@gmail.com",
            phone: "9998887771",
            company: "Articea prtivated LMT",
            Role: "Director",
            address: "Stree no 1, Lost Angelis, CA",
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filterText, setFilterText] = useState("");

  const [activeContact, setActiveContact] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [checkedContactIdList, setCheckedContactIDList] = useState([]);

  const [isMultiDelete, setIsMultiDelete] = useState(false);

  const [deleteContactId, setDeleteContactId] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDelete = () => {
    if (isMultiDelete) {
      deleteCheckedContacts(checkedContactIdList);
    } else {
      deleteContact(deleteContactId);
    }
    handleClose();
  };

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    if (activeContact && activeContact.id === id) {
      setActiveContact(null);
      setIsActive(false);
    }
    if (checkedContactIdList.includes(id)) {
      setCheckedContactIDList(
        checkedContactIdList.filter((contactId) => contactId !== id)
      );
    }
  };

  const editContact = (contact) => {
    const newContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(newContacts);
    setActiveContact(contact);
  };

  const showActiveUser = (id) => {
    const newActiveContact = contacts.find((contact) => contact.id === id);
    setActiveContact(newActiveContact);
    setIsActive(true);
  };

  const deleteCheckedContacts = (checkedContactIdList) => {
    const newContacts = contacts.filter((contact) =>
      checkedContactIdList.includes(contact.id) ? false : true
    );
    setContacts(newContacts);
    setCheckedContactIDList([]);
    checkedContactIdList.forEach((id) => {
      if (activeContact && activeContact.id === id) {
        setActiveContact(null);
        setIsActive(false);
      }
    });
  };

  return (
    <div className="main-content container-fluid">
      <div className="row">
        <div className="main-content-top col-xl-12"></div>
      </div>
      <div className="row">
        <div className="main-content-bottom container-fluid p-lg-5 p-3">
          <div className="row">
            <div className="col-xl-12 d-flex contactbook__main-img-container">
              <img
                src={contactbook}
                alt="contactbook"
                className="contactbook"
              />
              <div className="main-content-header">
                <h3>Contacts</h3>
                <p>Welcome React Contact App</p>
              </div>
            </div>
          </div>
          <div className="row mb-4 p-lg-5 pb-lg-0 pt-lg-0">
            <div className="col-xl-3 col-md-6">
              <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
              />
            </div>
            <div className="col-xl-2 col-md-3 d-flex">
              <ContactButton
                btnIcon={"plus"}
                btnText={"Add Contact"}
                btnType={"add"}
                setModalShow={setModalShow}
                setIsEdit={setIsEdit}
              />
            </div>
            {/* <div className="col-xl-7 col-md-3 d-flex">
              {checkedContactIdList.length > 0 ? (
                <Button
                  title={`Delete ${checkedContactIdList.length} contact(s)`}
                  className="custom-btn"
                  onClick={() => {
                    handleShow();
                    setIsMultiDelete(true);
                  }}
                >
                  <TrashIcon className="custom-btn-icon" />
                  Delete
                </Button>
              ) : (
                ""
              )}
            </div> */}
          </div>
          <div className="row p-lg-5 pb-lg-0 pt-lg-0">
            <div className="col-lg-7 ">
              <ContactTable
                contacts={contacts}
                filterText={filterText}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            </div>
            <div className="col-lg-5">
              {isActive && (
                <ContactInfo
                  activeContact={activeContact}
                  setIsEdit={setIsEdit}
                  setModalShow={setModalShow}
                />
              )}
            </div>
            {modalShow && (
              <ContactForm
                activeContact={activeContact}
                isEdit={isEdit}
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={isEdit ? "Edit Contact" : "Add Contact"}
                addContact={addContact}
                editContact={editContact}
              />
            )}
            {show && (
              <DeleteModel
                show={show}
                handleClose={handleClose}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
