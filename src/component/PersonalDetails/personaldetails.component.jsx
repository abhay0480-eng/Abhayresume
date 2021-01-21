import React from 'react';
import './personaldetails.styles.css';

function PersonalDetails(){
    return(
        <div >
            <p className="heading">Personal Details: </p>
            <div className="Details">
            <p><pre className="textlayout">Date of Birth:                7/Nov/1993</pre></p>
            <p><pre className="textlayout">Sex:                          Male</pre></p>
            <p><pre className="textlayout">Nationality:                  Indian</pre></p>
            <p><pre className="textlayout">Address:                      Shankar Vihar colony, quarsi, Ramghat Road Aligarh, Uttar Pradesh </pre></p>
            <p><pre className="textlayout">Language:                     Hindi, English</pre></p>
         

            </div>
        </div>
    )
}
export default PersonalDetails;
