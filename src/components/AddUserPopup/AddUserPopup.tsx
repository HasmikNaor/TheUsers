import { useEffect, useState } from "react";
import { UserType } from "../../utils/types";
import PopupWithForm from "../shared/PopupWithForm/PopupWithForm";

type AddUserPopupProps = {
  onSubmit: () => void;
  onClose: () => void;
  isOpen: boolean;
  isUpdateBtnClicked: boolean;
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
const AddUserPopup = ({
  onSubmit,
  onClose,
  isOpen,
  isUpdateBtnClicked,
  user,
  setUser,
}: AddUserPopupProps) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setUser((prev) => ({ ...prev, uuid: Math.random().toString() }));
  }, []);

  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { city, country, email, fName, img, lName, street } = user;
    const condition =
      city &&
      country &&
      email &&
      emailPattern.test(user.email) &&
      fName &&
      img &&
      lName &&
      `${lName}${fName}`.length > 3 &&
      street;

    if (condition) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [
    user.city,
    user.country,
    user.email,
    user.fName,
    user.img,
    user.lName,
    user.street,
  ]);

  const submitNewUser = () => {
    onSubmit();
    onClose();
  };

  const changeFName = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.currentTarget.value;
    if (regex.test(value)) {
      setUser((prev) => ({ ...prev, fName: value }));
    }
  };
  const changeLName = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.currentTarget.value;
    if (regex.test(value)) {
      setUser((prev) => ({ ...prev, lName: value }));
    }
  };
  const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUser((prev) => ({ ...prev, email: value }));
  };
  const changeImg = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUser((prev) => ({ ...prev, img: value }));
  };

  const changeCountry = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.currentTarget.value;
    if (regex.test(value)) {
      setUser((prev) => ({ ...prev, country: value }));
    }
  };
  const changeCity = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.currentTarget.value;
    if (regex.test(value)) {
      setUser((prev) => ({ ...prev, city: value }));
    }
  };
  const changeStreet = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const value = e.currentTarget.value;
    if (regex.test(value)) {
      setUser((prev) => ({ ...prev, street: value }));
    }
  };

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={submitNewUser}
      isOpen={isOpen}
      title="new-user"
      name="new-user"
      btnText="Submit"
      isBtnDisabled={isBtnDisabled}
    >
      <div className="add-user-popup__inputs">
        <input
          type="string"
          value={user?.fName || ""}
          onChange={changeFName}
          placeholder=" first Name"
          className="popup__inout"
        />
        <input
          type="string"
          value={user?.lName || ""}
          onChange={changeLName}
          placeholder=" last Name"
          className="popup__inout"
        />
        <input
          type="string"
          value={user?.email || ""}
          onChange={changeEmail}
          placeholder="Email"
          className="popup__inout"
        />
        <input
          type="string"
          value={user?.country || ""}
          onChange={changeCountry}
          placeholder="country"
          className="popup__inout"
        />
        <input
          type="string"
          value={user?.city || ""}
          onChange={changeCity}
          placeholder="city"
          className="popup__inout"
        />
        <input
          type="string"
          value={user?.street || ""}
          onChange={changeStreet}
          placeholder="street"
          className="popup__inout"
        />
        {!isUpdateBtnClicked && (
          <input
            type="string"
            value={user?.img || ""}
            onChange={changeImg}
            placeholder="img sourse"
            className="popup__inout"
          />
        )}
      </div>
    </PopupWithForm>
  );
};

export default AddUserPopup;
