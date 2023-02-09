import React, { useState } from 'react';
import './Bootstrap.css'

function Bootstrap() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <FormText />
                <div className='row'>
                    <div className='col-sm  right-and-left-box'>
                        <RightBox />
                    </div>
                    <div className='col-sm right-and-left-box'>
                        <LeftBox />
                    </div>
                </div>
            </div>
            <hr />
            <ButtonBox />
        </div>
    )
}

function UserBox() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div className='card'>
            <h4 className='card-header'>User:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <div className='row'>
                        <label htmlFor='usernameInput'>Username:</label>
                        <div className='col-xs-2'>
                            <input type='text' className='form-control usr' id='usernameInput' placeholder='Type username...' required onChange={(e) => setUsername(e.target.value)} maxLength={40}></input>
                        </div>
                        <label htmlFor='firstNameInput'>First Name:</label>
                        <div className='col-xs-2'>
                            <input type='text' className='form-control usr' id='firstNameInput' placeholder='Type first name...' required onChange={(e) => setFirstName(e.target.value)} maxLength={40}></input>
                        </div>
                        <label htmlFor='lastNameInput'>Last Name:</label>
                        <div className='col-xs-2'>
                            <input type='text' className='form-control usr' id='lastNameInput' placeholder='Type last name...' required onChange={(e) => setLastName(e.target.value)} maxLength={40}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactBox() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fax, setFax] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='card'>
            <h4 className='card-header'>Contact:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text contact-icon'><i className='fa fa-phone'></i></span>
                        </div>
                        <input type='text' className='form-control' placeholder='Type phone#...' required onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text contact-icon'><i className='fa fa-fax'></i></span>
                        </div>
                        <input type='text' className='form-control' placeholder='Type fax#...' required onChange={(e) => setFax(e.target.value)}></input>
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text contact-icon'><i className='fa fa-envelope'></i></span>
                        </div>
                        <input type='text' className='form-control' placeholder='Type e-mail...' required onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ScheduleBox() {

    const [adults, setAdults] = useState(1)
    const [checkInDate, setCheckInDate] = useState(new Date())
    const [checkOutDate, setCheckOutDate] = useState(new Date())

    return (
        <div className='card'>
            <h4 className='card-header'>Schedule:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <label htmlFor='adults-dropdown'>Adults:</label>
                    <select className='custom-select' id='adults-dropdown' onChange={(e) => setAdults(e.target.value)}>
                        <option value={1} selected>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function OtherBox() {
    const [message, setMessage] = useState('');
    const [radioOption, setRadioOption] = useState(1);
    const [priority, setPriority] = useState('');

    return (
        <div className='card'>
            <h4 className='card-header'>Other:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <label htmlFor='msg'>Message:</label>
                    <textarea className='form-control' id='msg' rows={14} placeholder='Type message here...' onChange={(e) => setMessage(e.target.value)}></textarea>
                    <label>Range:</label>
                    <input type='range' className='form-range' min={1} max={10} onChange={(e) => setRadioOption(e.target.value)}></input>
                    <label htmlFor='prty'>Priority:</label>
                    <div className='row'>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='lowprty' name='low-medium-high' onClick={(e) => setPriority('Low')}></input>
                                <label className='form-check-label' htmlFor='lowprty'>Low</label>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='medprty' name='low-medium-high' onClick={(e) => setPriority('Medium')}></input>
                                <label className='form-check-label' htmlFor='medprty'> Medium</label>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='highprty' name='low-medium-high' onClick={(e) => setPriority('High')}></input>
                                <label className='form-check-label' htmlFor='highprty'> High</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RightBox() {
    return (
        <div className='row'>
            <UserBox />
            <ContactBox />
            <ScheduleBox />
        </div>
    )
}

function LeftBox() {
    return (
        <div className='row'>
            <OtherBox />
        </div>
    )
}

function FormText() {
    return (
        <div className='card card-body formText'>
            Fill out the form and click the submit button when complete...
        </div>
    )
}

function ButtonBox() {
    return (
        <div className='row button-box'>
            <div className='col-sm'>
                <button className='btn btn-block btn-warning reset-button'><i className='fa fa-eraser'></i> Reset</button>
            </div>
            <div className='col-sm'>
                <button className='btn btn-block btn-primary submit-button'><i className='fa fa-paper-plane'></i> Submit</button>
            </div>
        </div>
    )
}

export default Bootstrap;