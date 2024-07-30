
import "./AuthPage.css"
import axios from 'axios';
export default function AuthPage(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
            .post('http://localhost:3001/authenticate', {username: value})
            .then( r =>   props.onAuth({ ...r.data, secret: value}))
            .catch(e => console.log(('error', e)))
    };

    return <div className={"background"}>
        <div>
            <form className={"formCard"} onSubmit={onSubmit}>
                <label className={"formTitle"}>Welcome 👋</label>
                <p className={"formSubTitle"}>Set a username to get started</p>

                <div className={"auth"}>
                    <div className={"authLabel"}>Username</div>
                    <input type={"text"} className={"authInput"}/>
                    <button className={"authButton"} type={"submit"}>Enter</button>
                </div>
            </form>
        </div>

    </div>

}
