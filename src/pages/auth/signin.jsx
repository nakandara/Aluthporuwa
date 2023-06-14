import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const provider = [
  {
    name: "google"
  }
];

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <h1>Checking authentication</h1>;
  if (session) {
    setTimeout(() => {
      router.push('/');
    }, 3000);
    return <div>You are already signed in</div>;
  }

  const handleOAuthSignIn = (name) => () => signIn(name);
  
  return (
    <div>
      {provider.map(({ name }) => (
        <button key={name} onClick={handleOAuthSignIn(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Signin;
