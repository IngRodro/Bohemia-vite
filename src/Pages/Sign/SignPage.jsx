import Layout from '../../Components/Organisms/Layout';
import SignForm from '../../Components/Organisms/SignForm';

function SignPage() {
  return (
    <Layout const signButton={false} title="Sign">
      <SignForm />
    </Layout>
  );
}

export default SignPage;
