
import Chat from './Chat'

import React, {useState } from 'react';



export default function Body() {
    const [buttonChat,SetbuttonChat] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Chat</h2>
                    <p>Chatuj z użytkownikami ;)</p>
                    {buttonChat ? <Chat />:null}   
                    <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                         Chatuj!
                        </button>
                </div>
              
            </div>
            <hr/>
        </div>
    )
}
