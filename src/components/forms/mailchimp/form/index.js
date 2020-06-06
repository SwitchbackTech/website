import React, {useState} from 'react'
import { FiArrowRight } from "react-icons/fi";
import Button from '../../../shared/button'
import {MailchimpWrap, SubmitBtn} from './mailchimp.stc'

const Mailchimp = ({ status = undefined, message, onValidated }) => {
    const [error, setError] = useState(false)
    let email;
    const submit = () => {
      const isValidate = validateEmail(email.value);
      setError(!isValidate)
      if(isValidate){
        return (
          email &&
          email.value.indexOf("@") > -1 &&
          onValidated({
            EMAIL: email.value
          })
        )
      }
    }

    function validateEmail(email){
      return /\S+@\S+\.\S+/.test(email)
    }

    return (
      <MailchimpWrap>
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <SubmitBtn>
            <Button onClick={submit} varient="iconButton"><FiArrowRight/></Button>
        </SubmitBtn>
        {(status === "sending" && !error) && <div style={{ color: "blue" }}>sending...</div>}
        {(status === "error" && !error) && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {(error && !status) && <div style={{color: 'red'}}>Please, Write a valid email</div>}
        {(status === "success" && !error) && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </MailchimpWrap>
    );
};

export default Mailchimp