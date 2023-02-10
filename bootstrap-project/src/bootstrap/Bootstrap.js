import React, { useState } from 'react';
import './Bootstrap.css'

function Bootstrap() {
    // user
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // contact
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fax, setFax] = useState('');
    const [email, setEmail] = useState('');
    // schedule
    const [adults, setAdults] = useState(1)
    const [checkInDate, setCheckInDate] = useState(new Date().getDate())
    const [checkOutDate, setCheckOutDate] = useState(new Date().getDate())
    const [days, setDays] = useState(0);
    const [cost, setCost] = useState(0.0);

    // other
    const [message, setMessage] = useState('');
    const [range, setRange] = useState(1);
    const [priority, setPriority] = useState('');

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='card card-body formText'>
                    Fill out the form and click the submit button when complete...
                </div>
                <div className='row'>
                    <div className='col-sm  right-and-left-box'>
                        <div className='row'>
                            <div className='card'>
                                <h4 className='card-header'>User:</h4>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <div className='row'>
                                            <label htmlFor='usernameInput'>Username:</label>
                                            <div className='col-xs-2'>
                                                <input type='text' className='form-control usr' id='usernameInput' placeholder='Type username...' required onChange={(e) => setUsername(e.target.value)} maxLength={40} value={username}></input>
                                            </div>
                                            <label htmlFor='firstNameInput'>First Name:</label>
                                            <div className='col-xs-2'>
                                                <input type='text' className='form-control usr' id='firstNameInput' placeholder='Type first name...' required onChange={(e) => setFirstName(e.target.value)} maxLength={40} value={firstName}></input>
                                            </div>
                                            <label htmlFor='lastNameInput'>Last Name:</label>
                                            <div className='col-xs-2'>
                                                <input type='text' className='form-control usr' id='lastNameInput' placeholder='Type last name...' required onChange={(e) => setLastName(e.target.value)} maxLength={40} value={lastName}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <h4 className='card-header'>Contact:</h4>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <span className='input-group-text contact-icon'><i className='fa fa-phone'></i></span>
                                            </div>
                                            <input type='tel' className='form-control' placeholder='Type phone#...' required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                                        </div>
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <span className='input-group-text contact-icon'><i className='fa fa-fax'></i></span>
                                            </div>
                                            <input type='tel' className='form-control' placeholder='Type fax#...' required onChange={(e) => setFax(e.target.value)} value={fax}></input>
                                        </div>
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <span className='input-group-text contact-icon'><i className='fa fa-envelope'></i></span>
                                            </div>
                                            <input type='email' className='form-control' placeholder='Type e-mail...' required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <h4 className='card-header'>Schedule:</h4>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='adults-dropdown'>Adults:</label>
                                        <select className='custom-select form-control' id='adults-dropdown' onChange={(e) => setAdults(e.target.value)} value={adults}>
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
                                        <div className='row'>
                                            <div className='col-sm'>
                                                <label>Check-In:</label>
                                                <input type='date' className='form-control' id='datepicker-checkin' onChange={(e) => {
                                                    if (e.target.value < checkOutDate) {
                                                        setCheckInDate(e.target.value)
                                                        setDays(Math.abs(checkOutDate - e.target.value))
                                                        setCost(adults * days * 150)
                                                    }
                                                }} value={checkInDate}></input>
                                            </div>
                                            <div className='col-sm'>
                                                <label>Check-Out:</label>
                                                <input type='date' className='form-control' id='datepicker-checkout' onChange={(e) => {
                                                    if (checkInDate < e.target.value) {
                                                        setCheckOutDate(e.target.value)
                                                        setDays(Math.abs(e.target.value - checkInDate))
                                                        setCost(adults * days * 150)
                                                    }
                                                }} value={checkOutDate}></input>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm'>
                                                <label>Days:</label>
                                                <input type='text' className='form-control readonly-text-field' readOnly value={days}></input>
                                            </div>
                                            <div className='col-sm'>
                                                <label>Cost ($):</label>
                                                <input type='text' className='form-control readonly-text-field' readOnly value={cost}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm right-and-left-box'>
                        <div className='row'>
                            <div className='card'>
                                <h4 className='card-header'>Other:</h4>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='msg'>Message:</label>
                                        <textarea className='form-control' id='msg' rows={14} placeholder='Type message here...' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                        <label>Range:</label>
                                        <input type='range' className='form-range' min={1} max={10} onChange={(e) => setRange(e.target.value)} value={range}></input>
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
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row button-box'>
                <div className='col-sm'>
                    <button className='btn btn-block btn-warning reset-button' onClick={(e) => {
                        // user
                        setUsername('')
                        setFirstName('')
                        setLastName('')
                        // contact
                        setPhoneNumber('')
                        setFax('')
                        setEmail('')
                        // schedule
                        setAdults(1)
                        setCheckInDate(new Date())
                        setCheckOutDate(new Date())
                        setDays(0)
                        setCost(0.0)
                        // other
                        setMessage('')
                        setRange(1)
                        setPriority('')
                    }}><i className='fa fa-eraser'></i> Reset</button>
                </div>
                <div className='col-sm'>
                    <button className='btn btn-block btn-primary submit-button' onClick={(e) => {

                    }}><i className='fa fa-paper-plane'></i> Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap;