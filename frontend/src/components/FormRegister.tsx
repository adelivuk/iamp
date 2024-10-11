import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import api from "../api";


// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants.ts";
// import api from "../api.ts";

import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator.tsx";

// interface FormProps {
//     route: string;
//     method: "login" | "register";
// }

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [sponsorEmail, setSponsorEmail] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        try {
            console.log({ firstName, lastName, email, sponsorEmail })
            const res = await api.post('/api/accounts/', { first_name: firstName, last_name: lastName, email, sponsor_email: sponsorEmail, username: `${firstName}_${lastName}` })
            console.log(res);

            // navigate("/login");

            // if (method === "login") {
            //     localStorage.setItem(ACCESS_TOKEN, res.data.access);
            //     localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            //     navigate("/")
            // } else {
            //     navigate("/login")
            // }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Register</h2>
            <input
                className="form-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
            />
            <input
                className="form-input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
            />
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                className="form-input"
                type="email"
                value={sponsorEmail}
                onChange={(e) => setSponsorEmail(e.target.value)}
                placeholder="Sponsor email"
                required
            />
            {loading && <LoadingIndicator />}
            <p>CAPTCHA</p>
            <div>
              <label htmlFor="terms">I agree to the terms and conditions</label>
              <input type="checkbox" id="terms" name="terms" value="terms" required />
            </div>
            <div>
            <button className="form-button" type="submit">
              Register
            </button>
            </div>
        </form>
    );
}

export default Form
