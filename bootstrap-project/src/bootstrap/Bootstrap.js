import React from 'react';

function Bootstrap() {
    return (
        <div class="container-fluid">
            <div class="row">
            <FormText />
                <div class="row">
                    <div class="col-xs-4">
                        <RightBox />
                    </div>
                    <div class="col-xs-4">
                        <LeftBox />
                    </div>
                </div>
            </div>
            <ButtonBox />
        </div>
    )
}

function UserBox() {
    return (
        <div class="card">
            <h4 class="card-header">User:</h4>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-xs-6">
                            <label>Username:</label>
                            <input type="text" class="form-control" placeholder="Type username..." required></input>
                        </div>
                        <div class="col-xs-6">
                            <label>First Name:</label>
                            <input type="text" class="form-control" placeholder="Type first name..." required></input>
                        </div>
                        <div class="col-xs-6">
                            <label>Last Name:</label>
                            <input type="text" class="form-control" placeholder="Type last name..." required></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function ContactBox() {
    return (
        <div class="card">
            <h4 class="card-header">Contact:</h4>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-xs-6">
                            <i class="fa fa-phone"></i>
                            <input type="text" class="form-control" placeholder="Type phone#..." required></input>
                        </div>
                        <div class="col-xs-6">
                            <i class="fa fa-fax"></i>
                            <input type="text" class="form-control" placeholder="Type fax#..." required></input>
                        </div>
                        <div class="col-xs-6">
                            <i class="fa fa-envelope"></i>
                            <input type="text" class="form-control" placeholder="Type e-mail..." required></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function ScheduleBox() {
 return (
    <div class="card">
        <h4 class="card-header">Schedule:</h4>
    </div>
    )
}

function OtherBox() {
    return (
        <div class="card">
            <h4 class="card-header">Other:</h4>
        </div>
    )
}

function RightBox() {
    return (
        <div class="row">
            <UserBox />
            <ContactBox />
            <ScheduleBox />
        </div>
    )
}

function LeftBox() {
    return (
        <div class="row">
            <OtherBox />
        </div>
    )
}

function FormText() {
    return (
        <div class="card card-body">
            Fill out the form and click the submit button when complete...
        </div>
    )
}

function ButtonBox() {
    return (
        <div class="row">
        <div class="col-xs-4">
          <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
          <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
          <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
      </div>
    )
}

export default Bootstrap;