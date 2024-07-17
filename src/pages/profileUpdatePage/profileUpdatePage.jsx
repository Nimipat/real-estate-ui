 import { useState } from "react";
import "./profileUpdatePage.scss";

function ProfileUpdatePage () {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Profile updated successfully");
        console.log("profile updated", {username, email, password});
    }

    return (
    <div className="profileUpdatePage">
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Update</button>
            </form>
            {message && <p className="successMessage">{message}</p>}
        </div>
        <div className="sideContainer">
            <img src="/noavtar.jpg" alt="" className="avatar" />
        </div>
    </div>
    
    )
};

export default ProfileUpdatePage;