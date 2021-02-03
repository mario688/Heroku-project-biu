import React, { useRef, useState } from 'react';
import '../style.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBNgk24NV6xJwS0Rl0Xs5plAuZfga1X84o",
    authDomain: "quizbiu.firebaseapp.com",
    projectId: "quizbiu",
    storageBucket: "quizbiu.appspot.com",
    messagingSenderId: "512126771398",
    appId: "1:512126771398:web:dee367788bedbde98cb7c7"
  })
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();

function Chat() {
    const [user] = useAuthState(auth);
    return (
        <>
   
            <div className="App">

                <div id="chat">
                    <h1></h1>
                    <section>
                    <SignOut />
                      {user ? <ChatRoom /> : <SignIn />}
                    </section>
                </div>
            </div>

        </>
    );
}
function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="btn btn-secondary" onClick={signInWithGoogle}>Sign in with Google</button>
    
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="btn btn-secondary" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(1000);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({behavior: 'smooth'});
    }

    return (<>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

            <span ref={dummy}></span>

        </main>

        <form className="form" onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="napisz coś.."/>

            <button type="submit" disabled={!formValue}>🛆</button>

        </form>
    </>)
}


function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const DEFAULT_IMAGE="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
    return (<>
        <div id="body">

            <div className={`message ${messageClass}`}>
                <img id="photoChat"  src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} onError={(e)=>{e.target.src=DEFAULT_IMAGE}}/>
                
                <p className="p">{text}</p>
            </div>
        </div>
    </>)
}


export default Chat;