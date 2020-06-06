import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'
import { FiChevronRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import From, { FormGroup, Label, Input, Textarea } from '../../shared/form'
import Button from '../../shared/button'
import { ContactFormWrap } from './contact-form.stc'

const ContactForm = ({ formgroupCSS, textareaCSS, btnCSS, url }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    })
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [value, setValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
            setValue({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: url,
            data
        })
            .then(res => {
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch(err => {
                handleServerResponse(false, err.response.data.error, form);
            });
    }
    const isErrors = Object.keys(errors).length !== 0 && true;
    const onChangeHandler = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    return (
        <ContactFormWrap>
            <From onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col lg={6}>
                        <FormGroup
                            {...formgroupCSS}
                            className={`form-group ${(isErrors && errors.name) ? 'has-error' : ''} ${value.name ? 'has-value' : ''}`}>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                onChange={onChangeHandler}
                                ref={register({
                                    required: 'Full Name Required',
                                })}
                            />
                            <Label htmlFor="name">Full Name</Label>
                            {errors.name && <span className="error">{errors.name.message}</span>}
                        </FormGroup>
                        <FormGroup
                            {...formgroupCSS}
                            className={`form-group ${(isErrors && errors.email) ? 'has-error' : ''} ${value.email ? 'has-value' : ''}`}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                onChange={onChangeHandler}
                                ref={register({
                                    required: 'Email Required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                            />
                            <Label htmlFor="email">Enter Your Email</Label>
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </FormGroup>
                        <FormGroup
                            {...formgroupCSS}
                            className={`form-group ${(isErrors && errors.subject) ? 'has-error' : ''} ${value.subject ? 'has-value' : ''}`}>
                            <Input
                                type="text"
                                name="subject"
                                id="subject"
                                onChange={onChangeHandler}
                                ref={register({
                                    required: 'Subject Required',
                                })}
                            />
                            <Label htmlFor="subject">Subject</Label>
                            {errors.subject && <span className="error">{errors.subject.message}</span>}
                        </FormGroup>
                    </Col>
                    <Col lg={6}>
                        <FormGroup
                            {...formgroupCSS}
                            className={`form-group ${(isErrors && errors.message) ? 'has-error' : ''} ${value.message ? 'has-value' : ''}`}>
                            <Textarea
                                {...textareaCSS}
                                name="message"
                                id="message"
                                onChange={onChangeHandler}
                                ref={register({
                                    required: 'Message Required',
                                    minLength: { value: 10, message: "Minimum length is 10" }
                                })}
                            ></Textarea>
                            <Label htmlFor="message">Write your message here.</Label>
                            {errors.message && <span className="error">{errors.message.message}</span>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button type="submit" {...btnCSS} disabled={serverState.submitting} icon={<FiChevronRight />}>Submit Message</Button>
                        {serverState.status && (
                            <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </Col>
                </Row>
            </From>
        </ContactFormWrap>
    )
}

ContactForm.defaultProps = {
    formgroupCSS: {
        mb: '30px'
    },
    textareaCSS: {
        height: ['120px', '150px', '200px', null, '240px']
    },
    btnCSS: {
        btnsize: 'fullwidth',
        varient: 'contained',
        shape: 'rounded',
        bg: '#f8777c',
        fontSize: '13px',
        letterSpacing: '1px',
        iconcss: {
            pl: '5px'
        }
    }
}

export default ContactForm

