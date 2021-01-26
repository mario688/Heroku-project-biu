
import Chat from './Chat'

import React, {useState } from 'react';



export default function Body() {
    const [buttonChat,SetbuttonChat] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="font-weight-bold">XD</h2>
                    <p>Tekst</p>
                     
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bold">XD</h2>
                    <p>Tekst</p>
                    {buttonChat ? <Chat />:null}    
                        <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                         Chatuj!
                        </button>
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bolder">xd</h2>
                    <p>tekst </p>
                    <p><a className="btn btn-secondary" role="button">guzik &raquo;</a></p>
                </div>
            </div>
            <hr/>
        </div>
    )
}
