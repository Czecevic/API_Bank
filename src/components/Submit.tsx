import { getToken, getUser } from "../API/api";
import { useNavigate } from "react-router-dom";

interface SubmitProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const Submit: React.FunctionComponent<SubmitProps> = async ({
  user,
  password,
  setErrorMessage,
}) => {
  const nav = useNavigate();
  // `steve@rogers.com`, `password456`
  const token = await getToken(user, password);
  // console.log(token);

  if (token !== "error") {
    // envoyer le token dans getUser
    const useToken = await getUser(token);
    // console.log(useToken);
    if (useToken !== "not found") {
      nav(`/${user}`);
    }
  } else {
    setErrorMessage("mot de passe ou nom d'utilisateur incorrect");
  }
  setUser("");
  setPassword("");
};
