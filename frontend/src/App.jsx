import { useState } from 'react'
import './App.css'
import AuthPage from "./AuthPage/AuthPage.jsx";
import ChatPage from "./ChatPage/ChatPage.jsx";

function App() {
    const [username, setUsername] = useState(undefined);

    if (!username)
      return <AuthPage onAuth={(username) => setUsername(username)}/>
    else
        return <ChatPage user = {username}/>
}

export default App
