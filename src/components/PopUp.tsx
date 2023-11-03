import { useState } from "react";
import { selectUser, updateUser } from "../stores/User.stores";
import { updateUserApi } from "../API/api";
import { useDispatch, useSelector } from "react-redux";

interface PopUpProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopUp: React.FunctionComponent<PopUpProps> = ({
  trigger,
  setTrigger,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const dispatch = useDispatch();
  const token = useSelector(selectUser).token;
  const popupReturn = trigger ? "formPopUpActive" : "formPopUp";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(token);
    updateUserApi(firstName, lastName, token);
    dispatch(
      updateUser({ firstName: firstName, lastName: lastName, token: token })
    );
    setTrigger(false);
  };

  const handleCancel = () => {
    setTrigger(false);
  };
  return (
    <form
      action=""
      method="get"
      className={popupReturn}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="inputForm">
        <div className="form-firstName">
          <input
            type="text"
            value={firstName}
            placeholder="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-lastName">
          <input
            type="text"
            value={lastName}
            placeholder="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="buttonForm">
        <div className="button-form">
          <input type="submit" />
        </div>
        <div className="button-cancel">
          <input type="button" value="cancel" onClick={handleCancel} />
        </div>
      </div>
    </form>
  );
};
