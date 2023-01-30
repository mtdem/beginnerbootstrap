import React from 'react';

function Bootstrap() {
    return (
        <div class="row">
            <FormText />
            <UserBox />
            <ContactBox />
        </div>
    )
}

function UserBox() {
    return (
        <div class="card">
            <h3 class="card-header">User</h3>
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
            <h3 class="card-header">Contact</h3>
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

// function ScheduleBox() {
//  return (
// 
//  )
// }
// 
// function OtherBox() {
//     return (
// 
//     )
// }
// 
// function RightBox() {
//     return (
// 
//     )
// }
// 
// function LeftBox() {
//     return (
// 
//     )
// }
// 
// function BookingForm() {
//     return (
//         <div>
// 
//         </div>
//     )
// }

function FormText() {
    return (
        <div class="card card-body">
            Fill out the form and click the submit button when complete...
        </div>
    )
}

export default Bootstrap;