import React from 'react';
import './FAQ.css';
import faqpic from '../../../images/faq.webp'
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center section-header">
                <h5 className="text-info">FAQ</h5>
                <h2>Full range of travel service</h2>
            </div>
            <div className="row align-items-center mt-5">

                <div className="col-sm-12 col-md-6">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Starts the automated process.</Accordion.Header>
                            <Accordion.Body>
                                The automated process starts as soon as
                                your clothes go into the machine. Duis cursus, mi
                                quis viverra ornare.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>The automated process starts.</Accordion.Header>
                            <Accordion.Body>
                                The automated process starts as soon as
                                your clothes go into the machine. Duis cursus, mi
                                quis viverra ornare.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Automated process starts.</Accordion.Header>
                            <Accordion.Body>
                                The automated process starts as soon as
                                your clothes go into the machine. Duis cursus, mi
                                quis viverra ornare.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Process the automated magic.</Accordion.Header>
                            <Accordion.Body>
                                The automated process starts as soon as
                                your clothes go into the machine. Duis cursus, mi
                                quis viverra ornare.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                
                <div className="col-sm-12 col-md-6">
                    <img src={faqpic} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;