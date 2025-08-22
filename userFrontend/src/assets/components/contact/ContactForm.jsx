import React, { useState } from "react";
import "./ContactForm.css";
import Loader from "../Loader";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isBlank, setIsBlank] = useState(false)

  const handleSubmit = async () => {
    if (!name || !email || !contact || !subject || !message) {
      setIsBlank(true);
      return;
    } else {
      setIsSubmitting(true);
      await axios.post("https://hill-view-escape-second-backend.onrender.com/contact", { name, email, contact, subject, message });
      console.log(name, email, contact, subject, message);

      setName("");
      setEmail("");
      setContact("");
      setSubject("");
      setMessage("");

      // setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true); // show success alert
      setTimeout(() => setSuccess(false), 4000);
      // }, 2000);
    }
  };

  return (
    <div className="contactContainer">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="playFair text-center">Contact Form</h3>
            <div className="p-4 shadowCont bg-light">

              {success && (
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                  className="mb-3"
                >
                  We will contact you soon. <br />
                  Thank you!
                </Alert>
              )}

              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <input
                    required
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    required
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-control"
                    placeholder="Contact No."
                  />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <input
                    required
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  rows="2"
                  placeholder="Message"
                ></textarea>
              </div>
              {isBlank && <p style={{ color: "red", marginTop: "8px", textAlign: "center" }}>⚠ Please fill all fields.</p>}


              <div className="text-center">
                {isSubmitting ? (
                  <button className="btn btn-primary px-5" disabled>
                    <Loader />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary px-5"
                  >
                    Submit
                  </button>
                )}

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
