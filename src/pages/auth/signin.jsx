import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const provider = [
  {
    name: "google",
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <h1>Checking authentication</h1>;
  if (session) {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    return <div>You are already signed in</div>;
  }

  const handleOAuthSignIn = (name) => () => signIn(name);

  return (
    <div>
    
      <form className="form" autoComplete="off">
        <div className="control">
          <h1>Sign In</h1>
        </div>
        <div className="control block-cube block-input">
          <input name="username" type="text" placeholder="Username" />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input name="password" type="password" placeholder="Password" />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="button">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          {/* .bg2 */}
          <div className="text">Log In</div>
        </button>
        {/* GOOGLE */}

        {provider.map(({ name }) => (
         
          <button
            key={name}
            onClick={handleOAuthSignIn(name)}
            className="btn block-cube block-cube-hover"
            type="button"
          >
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            {/* .bg2 */}
            <div className="text">{name}</div>
          </button>
        ))}

        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank"></a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
