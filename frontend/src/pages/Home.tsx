import { Link } from "react-router-dom";

import HomeLayout from '../layouts/Home';

function Home() {

    return (
        <HomeLayout>
            <div className="flex space-x-4 align-start w-full p-8">

              <div className="max-w-sm bg-white border border-gray rounded-lg shadow text-center">
                <Link to="/register" className="mb-2 block p-6 text-2xl font-bold tracking-tight text-gray-900">Register</Link>
              </div>

              <div className="max-w-sm bg-white border border-gray rounded-lg shadow text-center">
                <Link to="/forgot-password" className="mb-2 block p-6 text-2xl font-bold tracking-tight text-gray-900">Forgot Password</Link>
              </div>

            </div>
        </HomeLayout>
    );
}

export default Home;
