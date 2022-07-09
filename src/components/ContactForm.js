import React from "react";
import { useState, useEffect } from "react";
// import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./contactform.css";

function ContactForm({
  activeContact,
  isEdit,
  show,
  onHide,
  title,
  addContact,
  editContact,
}) {
  const initialContact = {
    id: "_" + Math.random().toString(36).substr(2, 9),
    fname: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    Role: "",
    address: "",
  };
  const [contact, setContact] = useState(initialContact);

  const [firstname, setfirstname] = useState({ value: "", firstnameError: null });
  const [firstnameError, setfirstnameError] = useState(false);

  const [lastName, setLastName] = useState({ value: '', lastNameError: null });
  const [lastNameError, setLastNameError] = useState(false);

  


  useEffect(() => {
    isEdit ? setContact(activeContact) : setContact(initialContact);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContact, isEdit]);

  const [validated, setValidated] = useState(false);


  const formSubmitHandler = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(formSubmitHandler);
    if (firstname.firstnameError || lastName.lastNameError) {
      return;
    }
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      isEdit ? editContact(contact) : addContact(contact);
      setContact(initialContact);
      onHide(false);
      setValidated(false);
    }
  };
  const validatefirstname = () => {
    if (!firstname.value.trim()) {
      setfirstname({ ...firstname, firstnameError: 'Please enter a vaild first name.' })
    } else {
      setfirstname({ value: firstname.value, firstnameError: null })
    }
  }
  const validateLastName = () => {
    if (!lastName.value.trim()) {
      setLastName({ ...lastName, lastNameError: 'Please enter a vaild last name.' })
    } else {
      setLastName({ value: lastName.value, lastNameError: null })
    }
  }
  return (
    <div
      className="model__background"
      show={show}
      onHide={onHide}
      size="lg"
      backdrop="static"
      centered
    >
      <div className="model__main-container">
        <div className="model__container">
          <div className="model__title">
            <div className="model__title-main">
              <h3>{title}</h3>
            </div>
            <div className="form__container">
              <form
                noValidate
                validated={validated}
                onSubmit={formSubmitHandler}>
                <div className="form__input">
                  <div className="sub-input">
                    <label htmlFor="First Name">First Name</label>
                    <input
                      type="text"
                      // pattern="^\S[A-Za-z\s]{1,32}\S$"
                      placeholder="Enter First Name"
                      value={firstname.value}
                      onBlur={validatefirstname}
                      onChange={e => setfirstname({ value: e.target.value, firstnameError: null })}
                      required />
                    {firstname.firstnameError && <span>{firstname.firstnameError}</span>}
                  </div>
                  <div className="sub-input sub-class">
                    <label htmlFor="First Last">Last Name</label>
                    <input
                      type="text"
                      pattern="^\S[A-Za-z\s]{1,32}\S$"
                      placeholder="Enter Last Name"
                      value={lastName.value}
                      onFocus={validateLastName}
                      onChange={e => setLastName({ value: e.target.value, lastNameError: null })}
                      required
                    />
                    {lastName.lastNameError && <span>{lastName.lastNameError}</span>}
                  </div>

                  <div className="sub-input">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Enter Email Address"
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      required
                    />
                    {/* <span>Please enter a vaild email address.</span> */}
                  </div>
                  <div className="sub-input sub-class">
                    <label htmlFor="Phone number">Phone</label>
                    <input
                      type="text"
                      // pattern="^(7|8|9)\d{9}$"
                      placeholder="Enter Phone Number"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })
                      }
                      required
                    />
                    {/* <span>Please enter a vaild phone number.</span> */}
                  </div>

                  <div className="sub-input">
                    <label htmlFor="Company">Company</label>
                    <input
                      type="text"
                      // pattern="^\S[A-Za-z1-9\s.]{1,100}\S$"
                      placeholder="Enter Company Name"
                      value={contact.company}
                      onChange={(e) =>
                        setContact({ ...contact, company: e.target.value })
                      }
                      required
                    />
                    {/* <span>Please enter a vaild company name.</span> */}
                  </div>
                  <div className="sub-input select-option sub-class">
                    <label htmlFor="Role">Employee's role</label>
                    <select
                      value={contact.Role}
                      onChange={(e) =>
                        setContact({ ...contact, Role: e.target.value })
                      }
                      required
                    >
                      <option disabled value="">
                        Select The Role
                      </option>
                      <option value="President">President</option>
                      <option value="CEO">CEO</option>
                      <option value="MD">MD</option>
                    </select>

                    {/* <span>Please enter a vaild role.</span> */}
                  </div>

                  <div className="input-address">
                    <label htmlFor="address">Address</label>
                    <textarea
                      rows="5"
                      type="text"
                      placeholder="Enter Address"
                      value={contact.address}
                      onChange={(e) =>
                        setContact({ ...contact, address: e.target.value })
                      }
                      required
                    />
                    {/* <span>Please enter a vaild address.</span> */}
                  </div>

                  <div className="cancel-submit__button">
                    <Button variant="secondary" onClick={onHide}>
                      Cancel
                    </Button>
                    <Button type="submit">Save</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
