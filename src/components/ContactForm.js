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
  const [firstName, setFirstName] = useState({
    value: activeContact?.firstName || "",
    error: null,
  });
  const [lastName, setLastName] = useState({
    value: activeContact?.lastName || "",
    error: null,
  });
  const [email, setEmail] = useState({
    value: activeContact?.email || "",
    error: null,
  });
  const [phone, setPhone] = useState({
    value: activeContact?.phone || "",
    error: null,
  });
  const [company, setCompany] = useState({
    value: activeContact?.company || "",
    error: null,
  });
  const [role, setRole] = useState({
    value: activeContact?.role || "",
    error: null,
  });
  const [address, setAddress] = useState({
    value: activeContact?.address || "",
    error: null,
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formSubmitHandler);

    let isValid = true;
    if (!validateFirstName()) {
      isValid = false;
    }
    if (!validateLastName()) {
      isValid = false;
    }
    if (!validateAddress()) {
      isValid = false;
    }
    if (!validateCompany()) {
      isValid = false;
    }
    if (!validateEmail()) {
      isValid = false;
    }
    if (!validatePhone()) {
      isValid = false;
    }
    if (!validateRole()) {
      isValid = false;
    }
    if (!isValid) {
      return;
    }
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      role: role.value,
      address: address.value,
    };
    isEdit
      ? editContact({ ...activeContact, ...data })
      : addContact({
          id: "_" + Math.random().toString(36).substr(2, 9),
          ...data,
        });

    setFirstName({ firstName: "", error: null });
    setLastName({ lastName: "", error: null });
    setEmail({ email: "", error: null });
    setPhone({ phone: "", error: null });
    setCompany({ company: "", error: null });
    setRole({ role: "", error: null });
    setAddress({ address: "", error: null });
    onHide(false);
  };

  const validateFirstName = () => {
    if (!firstName.value.trim()) {
      setFirstName({ ...firstName, error: "Please enter a vaild first name." });
      return false;
    }
    setFirstName({ value: firstName.value, error: null });
    return true;
  };
  const validateLastName = () => {
    if (!lastName.value.trim()) {
      setLastName({ ...lastName, error: "Please enter a vaild last name." });
      return false;
    }
    setLastName({ value: lastName.value, error: null });
    return true;
  };
  const validateEmail = () => {
    if (!email.value.trim()) {
      setEmail({ ...email, error: "Please enter a vaild email address." });
      return false;
    }
    setEmail({ value: email.value, error: null });
    return true;
  };
  const validatePhone = () => {
    if (!phone.value.trim()) {
      setPhone({ ...phone, error: "Please enter a vaild phone number." });
      return false;
    }
    setPhone({ value: phone.value, error: null });
    return true;
  };

  const validateCompany = () => {
    if (!company.value.trim()) {
      setCompany({ ...company, error: "Please enter a vaild company name." });
      return false;
    }
    setCompany({ value: company.value, error: null });
    return true;
  };
  const validateRole = () => {
    if (!role.value.trim()) {
      setRole({ ...role, error: "Please select a vaild role." });
      return false;
    }
    setRole({ value: role.value, error: null });
    return true;
  };
  const validateAddress = () => {
    if (!address.value.trim()) {
      setAddress({ ...address, error: "Please enter a vaild role." });
      return false;
    }
    setAddress({ value: address.value, error: null });
    return true;
  };
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
              <form noValidate onSubmit={formSubmitHandler}>
                <div className="form__input">
                  <div className="sub-input">
                    <label htmlFor="First Name">First Name</label>
                    <input
                      type="text"
                      // pattern="^\S[A-Za-z\s]{1,32}\S$"
                      placeholder="Enter First Name"
                      value={firstName.value}
                      onBlur={validateFirstName}
                      onChange={(e) =>
                        setFirstName({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {firstName.error && <span>{firstName.error}</span>}
                  </div>
                  <div className="sub-input sub-class">
                    <label htmlFor="First Last">Last Name</label>
                    <input
                      type="text"
                      pattern="^\S[A-Za-z\s]{1,32}\S$"
                      placeholder="Enter Last Name"
                      value={lastName.value}
                      onBlur={validateLastName}
                      onChange={(e) =>
                        setLastName({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {lastName.error && <span>{lastName.error}</span>}
                  </div>

                  <div className="sub-input">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Enter Email Address"
                      value={email.value}
                      onBlur={validateEmail}
                      onChange={(e) =>
                        setEmail({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {email.error && <span>{email.error}</span>}
                  </div>
                  <div className="sub-input sub-class">
                    <label htmlFor="Phone number">Phone</label>
                    <input
                      type="text"
                      // pattern="^(7|8|9)\d{9}$"
                      placeholder="Enter Phone Number"
                      value={phone.value}
                      onBlur={validatePhone}
                      onChange={(e) =>
                        setPhone({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {phone.error && <span>{phone.error}</span>}
                  </div>

                  <div className="sub-input">
                    <label htmlFor="Company">Company</label>
                    <input
                      type="text"
                      // pattern="^\S[A-Za-z1-9\s.]{1,100}\S$"
                      placeholder="Enter Company Name"
                      value={company.value}
                      onBlur={validateCompany}
                      onChange={(e) =>
                        setCompany({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {company.error && <span>{company.error}</span>}
                  </div>
                  <div className="sub-input select-option sub-class">
                    <label htmlFor="role">Employee's role</label>
                    <select
                      value={role.value}
                      onBlur={validateRole}
                      onChange={(e) =>
                        setRole({ value: e.target.value, error: null })
                      }
                      required
                    >
                      <option disabled value="">
                        Select The role
                      </option>
                      <option value="President">President</option>
                      <option value="CEO">CEO</option>
                      <option value="MD">MD</option>
                    </select>

                    {role.error && <span>{role.error}</span>}
                  </div>

                  <div className="input-address">
                    <label htmlFor="address">Address</label>
                    <textarea
                      rows="5"
                      type="text"
                      placeholder="Enter Address"
                      value={address.value}
                      onBlur={validateAddress}
                      onChange={(e) =>
                        setAddress({ value: e.target.value, error: null })
                      }
                      required
                    />
                    {address.error && <span>{address.error}</span>}
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
