import { useState } from "react";
import { Link} from 'react-router-dom';

import Logo from "../assets/logo.svg";

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
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img className="mx-auto h-auto w-full md:max-w-md" src={ Logo } alt="SRB" />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      id="first-name"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      id="last-name"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      id="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div className="text-sm">
                      <Link to="/forgot-password" className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      type="email"
                      value={sponsorEmail}
                      onChange={(e) => setSponsorEmail(e.target.value)}
                      placeholder="Sponsor email"
                      id="sponsor-email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="transition flex w-full justify-center rounded-md bg-blue px-4 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue:25">Sign in</button>
                </div>
              </form>

              {loading && <LoadingIndicator />}

              {/* <p>CAPTCHA</p>
              <div>
                <label htmlFor="terms">I agree to the terms and conditions</label>
                <input type="checkbox" id="terms" name="terms" value="terms" required />
              </div> */}

              {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
              </p> */}
            </div>
          </div>

        </div>
    );
}

export default Form
