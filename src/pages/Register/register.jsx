import "./register.scss";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }
        
    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handelSubmit}>
                    <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register;