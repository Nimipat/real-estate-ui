import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

function Login (){
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handelSubmit}>
                    <h1>Welcome back</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <Link to="/register">{"Don't"} you have an account</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Login