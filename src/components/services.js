


import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useAppContext } from '../context/App-context';
const versions = [{
    name: "1", value: "1"
}, {
    name: "2", value: "2"
}, {
    name: "3", value: "3"
}, {
    name: "4", value: "3"
}, {
    name: "5", value: "3"
}, {
    name: "6", value: "3"
}];
export default function Services({ onSubmit }) {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ datacenter_name: '', location: "", type: "", resource_prefix: "", version: 1, connection_status: false, discovery_status: false, application: "" });
    const [isConnected, setConnection] = useState();
    const [isDiscovery, setDiscovery] = useState();
    const [text, setText] = useState('Enter prefix here to search in dc');
    const [version, setVersion] = useState("");
    const { state, addData } = useAppContext();
    const onChange = (val, name) => {
        if (name === "version") {
            setVersion(val)
        }
        if (name === "resource_prefix") {
            setText(val)
        }
        if (name === "connection_status") {
            setConnection(isConnected ? false : true)
        }
        if (name === "discovery_status") {
            setDiscovery(!isDiscovery ? false : true)
        }
        setForm({
            ...form, [name]: val
        })
    }
    const handleSubmit = (event) => {
        setSubmitted(true);
        addData(form)
        console.log(form);
        alert("Datacenter data is updated in table. Please check datacenter table")
    }

    return (
        <>
            <h3 className='my-2'>Datacenter information</h3>
            <Form>
                <div className='row'>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='fw-bold'>Datacenter Name</Form.Label>
                            <Form.Control type="name" placeholder="e.g.aws/azure" onChange={(e) => onChange(e.target.value, 'datacenter_name')} />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label className='fw-bold'>Location</Form.Label>
                            <Form.Control type="text" placeholder="e.g.Central India" onChange={(e) => onChange(e.target.value, 'location')} />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label className='fw-bold'>Type</Form.Label>
                            <Form.Control type="text" placeholder="e.g.onprem/cloud" onChange={(e) => onChange(e.target.value, 'type')} />
                        </Form.Group>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fw-bold">Resource prefix</Form.Label>
                            <Form.Control type="text" placeholder={text} onChange={(e) => onChange(e.target.value, 'resource_prefix')} />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <Form.Label className='px-md-2 fw-bold'>Select gateway version</Form.Label>

                        <select className="form-select"
                            value={version}
                            onChange={(e) => {
                                setVersion(Number(e.target.value));
                            }}
                        >
                            {
                                versions.map((opt, index) => {
                                    return (<option value={index}>{opt.name}</option>)
                                })
                            }
                        </select>

                    </div>
                    <div className='col-md-4'>
                        <div class="clr-toggle-wrapper mb-3">
                            <input type="checkbox" id="connection" name="connection_status" value={isConnected} class="clr-toggle" onChange={(e) => onChange(e.target.checked, 'connection_status')} />
                            <label htmlFor="connection" className='fw-bold'>Initiate connection</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4>Your resource prefix summary</h4>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                    </div>
                    <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label className='fw-bold'>Applications</Form.Label>
                            <Form.Control type="number" placeholder="1,2,3" onChange={(e) => onChange(e.target.value, 'application')} />
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        {isDiscovery}
                        <div class="clr-toggle-wrapper mb-3">
                            <input type="checkbox" id="discovery" name="discovery_status" value={isDiscovery} class="clr-toggle" onChange={(e) => onChange(e.target.checked, 'discovery_status')} />
                            <label htmlFor="discovery" className='fw-bold'>Initiate Discovery</label>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4>Preview</h4>
                        <p>{text}</p>
                    </div>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-2 my-2'>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </Form >
        </>
    )

}