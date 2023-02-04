import React from 'react';
import './Bootstrap.css'

function Bootstrap() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <FormText />
                <div className='row'>
                    <div className='col-sm'>
                        <RightBox />
                    </div>
                    <div className='col-sm'>
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
    return (
        <div className='card'>
            <h4 className='card-header'>User:</h4>
            <div className='card-body'>
                <form>
                    <div className='row'>
                        <label>Username:</label>
                        <input type='text' className='form-control' placeholder='Type username...' required></input>
                        <label>First Name:</label>
                        <input type='text' className='form-control' placeholder='Type first name...' required></input>
                        <label>Last Name:</label>
                        <input type='text' className='form-control' placeholder='Type last name...' required></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

function ContactBox() {
    return (
        <div className='card'>
            <h4 className='card-header'>Contact:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <i className='fa fa-phone'></i>
                        </div>
                        <input type='text' className='form-control' placeholder='Type phone#...' required></input>
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <i className='fa fa-fax'></i>
                        </div>
                        <input type='text' className='form-control' placeholder='Type fax#...' required></input>
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <i className='fa fa-envelope'></i>
                        </div>
                        <input type='text' className='form-control' placeholder='Type e-mail...' required></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ScheduleBox() {
    return (
        <div className='card'>
            <h4 className='card-header'>Schedule:</h4>
        </div>
    )
}

function OtherBox() {
    return (
        <div className='card'>
            <h4 className='card-header'>Other:</h4>
            <div className='card-body'>
                <div className='form-group'>
                    <label htmlFor='msg'>Message:</label>
                    <textarea className='form-control' id='msg' rows={14} placeholder='Type message here...'></textarea>
                    <label>Range:</label>
                    <label htmlFor='prty'>Priority</label>
                    <div className='row'>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='lowprty' checked></input>
                                <label className='form-check-label' htmlFor='lowprty'>Low</label>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='medprty'></input>
                                <label className='form-check-label' htmlFor='medprty'> Medium</label>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' id='highprty'></input>
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
        <div className='card card-body'>
            Fill out the form and click the submit button when complete...
        </div>
    )
}

function ButtonBox() {
    return (
        <div className='row'>
            <div className='col-sm'>
                <button className='btn btn-block btn-info'><i className='fa fa-eraser'></i> Reset</button>
            </div>
            <div className='col-sm'>
                <button className='btn btn-block btn-primary'><i className='fa fa-paper-plane'></i> Submit</button>
            </div>
        </div>
    )
}

export default Bootstrap;