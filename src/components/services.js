


import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';

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

    const handleClick = () => {
        inputRef.current.focus();
    }
    const [text, setText] = useState('Enter state here2');

    return (
        <>
            <Form >
                <div className='row'>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="name" ref={inputRef} onChange={handleClick} />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" value={text} rows={3} onChange={TextChanged} />
                        </Form.Group>
                    </div>
                    <div className='col-md-6'>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleLowClick}>Convert to Lowercase</button>
                        <button className='btn btn-primary mx-2' type='button' onClick={handleClearTextClick}>Clear Text</button>
                        <h1>Your text summary</h1>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
                    </div>
                    <div className='col-md-6'>
                        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                    </div>
                </div>
            </Form>
        </>
    )

}