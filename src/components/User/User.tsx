import { UserType } from "../../utils/types";
import Icon from "../shared/Icon";
import { iconDictionary } from "../shared/iconDictionary";

interface UserProps {
  user: UserType;
  onDelete: (user: UserType) => void;
  onEditClick: (user: UserType) => void;
}

const User = ({ user, onDelete, onEditClick }: UserProps) => {
  const { fName, lName, country, city, street, email, img } = user;
  return (
    <li className="user">
      <div className="user__btns">
        <button className="user__btn" onClick={() => onDelete(user)}>
          <Icon
            data={iconDictionary.trash.data}
            viewbox={iconDictionary.trash.viewBox}
            fill="white"
            width={20}
            height={20}
            className="user__icon"
          />
        </button>
        <button className="user__btn" onClick={() => onEditClick(user)}>
          <Icon
            data={iconDictionary.edit.data}
            viewbox={iconDictionary.edit.viewBox}
            fill="white"
            className="user__icon"
          />
        </button>
      </div>
      <img src={img} alt="user img" className="user__img" />
      <h2 className="user__title">
        {fName} {lName}
      </h2>
      <p className="user__subtitle">{email}</p>
      <p className="user__subtitle">
        {country}, {city}, {street}{" "}
      </p>
    </li>
  );
};
export default User;
