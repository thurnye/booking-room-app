import React from 'react'

export default function googleCal() {

    const gapi = window.gapi
    // Client ID and API key from the Developer Console
    const CLIENT_ID = '518102475407-odlioinotdl25r076u9ng61m9vfdhgk9.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyAwTnAUF05oWIRZHolazjvL3bNO93hpAek';

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
    const handleClick =() => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })
            gapi.client.load('calendar', 'v3', () => console.log('loaded!'))
            gapi.auth2.getAuthInstance().signIn()
        });
    }

    return (
        <div>
            This if the google calendar
            <button className="btn btn-primary"onClick={()=>handleClick()}>Book Now</button>
        </div>
    )
}
