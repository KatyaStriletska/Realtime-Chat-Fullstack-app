import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatPage({user}){
    return <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId={'b4e5e72a-3126-48e1-b041-5da986f332a5'}
            username={user.username}
            secret={user.secret}
            style={{height: '100%'}}
        />
    </div>
}
