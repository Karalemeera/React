


import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import { CdsRange } from '@cds/react/range';
import { CdsBadge } from '@cds/react/badge';

const countries = [{
    version: "1.2", value: "1"
}, {
    name: "2.1", value: "2"
}, {
    name: "3.1", value: "3"
}];
export default function Services() {
    const inputRef = useRef(null);
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleClearTextClick = () => {
        setText("")
    }
    const TextChanged = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter prefix here to search in dc');

    const [country, setCountry] = useState({ name: "India", value: "IND", cities: ['Delhi', 'Mumbai'] })
    return (
        <>
            <h3 className='my-2'>Datacenter information</h3>
            <Form >
                <div className='row'>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Datacenter Name</Form.Label>
                            <Form.Control type="name" placeholder="e.g.aws/azure" ref={inputRef} />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="email" placeholder="e.g.Central India" />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="e.g.onprem/cloud" />
                        </Form.Group>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Resource prefix</Form.Label>
                            <Form.Control as="textarea" value={text} onChange={TextChanged} />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload datacenter template</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                </div>
                <div className='row my-3'>
                    <div className='col-md-6'>
                        <CdsRange>
                            <label>Migration Status</label>
                            <input type="range" value={90} name="two" />
                        </CdsRange>
                    </div>
                    <div className='col-md-6'>
                        <h2 cds-text="section" className='my-2'>Configuration for discovery status</h2>
                        <section cds-layout="horizontal gap:md">
                            <CdsBadge status="info">2</CdsBadge>
                            <CdsBadge status="success">3</CdsBadge>
                            <CdsBadge status="warning">12</CdsBadge>
                            <CdsBadge status="danger">15</CdsBadge>
                            <CdsBadge color="gray">1</CdsBadge>
                            <CdsBadge color="purple">1</CdsBadge>
                            <CdsBadge color="blue">15</CdsBadge>
                            <CdsBadge color="orange">2</CdsBadge>
                            <CdsBadge color="light-blue">3</CdsBadge>
                        </section>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <Form.Label className='px-md-2'>Select version</Form.Label>

                        <select className="form-select"
                            value={country}
                            onChange={(e) => {
                                setCountry(Number(e.target.value));
                            }}
                        >
                            {
                                countries.map((opt, index) => {
                                    return (<option value={index}>{opt.name}</option>)
                                })
                            }
                        </select>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleLowClick}>Convert to Lowercase</button>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleClearTextClick}>Clear Text</button>
                        <h1>Your resource prefix summary</h1>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                    </div>
                    <div className='col-md-6'>
                        <h2>Preview</h2>
                        <p>{text}</p>
                    </div>

                </div>
            </Form >
        </>
    )

}