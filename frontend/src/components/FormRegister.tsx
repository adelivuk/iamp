import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";

import Logo from "../assets/logo.svg";

import api from "../api";

// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants.ts";
// import api from "../api.ts";

import LoadingIndicator from "./LoadingIndicator.tsx";


function FormRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const recaptcha = useRef<ReCAPTCHA | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (recaptcha.current && !recaptcha.current.getValue()){
      alert("Please Submit Captcha")
    }

    try {
      console.log({ firstName, lastName, email, sponsorEmail });
      const res = await api.post("/api/accounts/", {
        first_name: firstName,
        last_name: lastName,
        email,
        sponsor_email: sponsorEmail,
        username: `${firstName}_${lastName}`,
      });
      console.log(res);

      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (value: string | null) => {
    console.log('Captcha value:', value);
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <img className="mx-auto h-auto w-full" src={Logo} alt="SRB" />
          </div>
          <h2 className="mt-10 text-center text-2xl text-capitalize uppercase font-bold text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="block w-full border-bottom border-b focus:outline-none p-1"
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                id="last-name"
                required
                className="block w-full border-bottom border-b focus:outline-none p-1"
              />
            </div>

            <div className="mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
                required
                className="block w-full border-bottom border-b focus:outline-none p-1"
              />
            </div>

            <div className="mt-2">
              <input
                type="email"
                value={sponsorEmail}
                onChange={(e) => setSponsorEmail(e.target.value)}
                placeholder="Sponsor email"
                id="sponsor-email"
                required
                className="block w-full border-bottom border-b focus:outline-none p-1"
              />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
                ref={recaptcha}
              />
            </div>

            <div>
              <button
                type="submit"
                className="transition flex w-full justify-center rounded-md bg-blue px-4 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue:25"
              >
                Register
              </button>
            </div>
          </form>

          {loading && <LoadingIndicator />}
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
