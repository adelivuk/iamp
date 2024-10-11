import HomeLayout from '../layouts/Home';
import FormLogin from '../components/FormLogin';

function Login() {
  return (
    <div>
      <HomeLayout>
        <FormLogin route="/api/token/" method="login" />
      </HomeLayout>
    </div>
  );
}

export default Login;
