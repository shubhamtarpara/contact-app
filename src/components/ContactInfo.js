import React from "react";
import ContactButton from "./ContactButton";
import ContactAvatar from "./ContactAvatar";
import { useState, useEffect } from "react";



const ContactInfo = (props) => {
  const { id, firstName, lastName, email, phone, company, role, address } =
    props.activeContact;

  const [contact, setContact] = useState({
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    company: company,
    role: role,
    address: address,
  });

  useEffect(() => {
    setContact({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: company,
      role: role,
      address: address,
    });
  }, [id, firstName, lastName, email, phone, company, role, address]);

  return (
    <div className="main-content-card">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <ContactAvatar
                    name={contact.firstName + " " + contact.lastName}
                    className={"info-avatar"}
                  />
                  <div className="mt-3 w-100">
                    <h4 className="m-auto ">
                      {contact.firstName + " " + contact.lastName}
                    </h4>
                    <p className="mb-1 text-secondary">
                      {contact.role} @ {contact.company}
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">
                    <h6 className=" mb-0 text-secondary">Full Name</h6>
                  </div>
                  <div className="col-8 truncate-string">
                    {contact.firstName} {contact.lastName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <h6 className=" mb-0 text-secondary ">Email</h6>
                  </div>
                  <div className="col-8">{contact.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <h6 className=" mb-0 text-secondary">Phone</h6>
                  </div>
                  <div className="col-8  ">{contact.phone}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <h6 className=" mb-0 text-secondary">Company</h6>
                  </div>
                  <div className="col-8  ">{contact.company}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <h6 className=" mb-0 text-secondary">Address</h6>
                  </div>
                  <div className="col-8  ">{contact.address}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <ContactButton
                      btnIcon={"pencil"}
                      btnText={"Edit Contact"}
                      setModalShow={props.setModalShow}
                      setIsEdit={props.setIsEdit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
