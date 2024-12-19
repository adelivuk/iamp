import { useState } from "react";
import api from "../api";
// import { useNavigate } from "react-router-dom";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function FormForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        try {
          console.log({ email })
            const res = await api.post('/api/accounts/reset-password', { email })
            console.log(res)

            // if (method === "login") {s
            //     localStorage.setItem(ACCESS_TOKEN, res.data.access);
            //     localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            //     navigate("/logged-in")
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
            <h2>reset password</h2>
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <p>CAPTCHA</p>
            {loading && <LoadingIndicator />}
            <div>
              <button className="form-button" type="submit">Reset password</button>
            </div>
        </form>
    );
}

export default FormForgotPassword
