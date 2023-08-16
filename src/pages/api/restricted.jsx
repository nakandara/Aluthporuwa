import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

const restrictedHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const users = await getServerSession(req, res, authOptions);
  console.log(users);

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    });
  }
};

export default restrictedHandler;
