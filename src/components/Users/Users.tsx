import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import User from "../User/User";
import { UserType } from "../../utils/types";
import Icon from "../shared/Icon";
import { iconDictionary } from "../shared/iconDictionary";
import AddUserPopup from "../AddUserPopup/AddUserPopup";
import Popup from "../shared/Popup/Popup";
import Search from "../shared/Search/Search";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isuserFormOpen, setIsuserFormOpen] = useState(false);
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [serachVal, setSearchVal] = useState("");
  const [searchedUsers, setSearchedUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState<UserType>({
    fName: "",
    lName: "",
    email: "",
    img: "",
    country: "",
    city: "",
    street: "",
    uuid: "",
  });

  const filterUsers = () => {
    const filtered = users.filter((user) =>
      `${user.email}${user.fName}${user.lName}${user.uuid}${user.country}${user.city}${user.street}`.includes(
        serachVal
      )
    );

    setSearchedUsers(filtered);
  };

  useEffect(() => {
    if (searchedUsers) {
      filterUsers();
    }
  }, [serachVal]);

  const saveUsers = (users: any) => {
    const u = users.map((user: any) => ({
      fName: user.name.first,
      lName: user.name.last,
      email: user.email,
      img: user.picture.medium,
      country: user.location.country,
      city: user.location.city,
      street: user.location.street.name,
      uuid: user.login.uuid,
    }));

    setUsers(u);
  };

  useEffect(() => {
    api
      .getAllUsers()
      .then((res) => saveUsers(res.results))
      .catch((err) => console.log(err));
  }, []);

  const updateUser = () => {
    const { fName, lName, email, country, city, street } = user;
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.uuid === user.uuid
          ? { ...u, fName, lName, email, country, city, street }
          : u
      )
    );
  };

  const createuser = () => {
    setUsers((prev) => [...prev, user]);
  };
  const clearFields = () => {
    setUser({
      fName: "",
      lName: "",
      email: "",
      img: "",
      country: "",
      city: "",
      street: "",
      uuid: "",
    });
  };

  const close = () => {
    setIsuserFormOpen(false);
    clearFields();
  };

  const submit = () => {
    const isUserMailExist = users.find((u) => u.email === user.email);
    if (isUserMailExist && !isUpdateBtnClicked) {
      setPopupMsg("the email already exists in DB");
      return;
    }
    if (isUpdateBtnClicked) {
      updateUser();
    } else {
      createuser();
    }
    setIsUpdateBtnClicked(false);
    clearFields();
  };

  const openuserForm = () => {
    setIsuserFormOpen(true);
  };

  const deleteUser = () => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.uuid !== user.uuid));
    close();
    setPopupMsg("");
  };
  const confirmDeletion = (user: UserType) => {
    setUser(user);
    setPopupMsg(`are you sure you want to delete ${user.fName} ${user.lName}?`);
  };

  const editUser = (user: UserType) => {
    setIsUpdateBtnClicked(true);
    setIsuserFormOpen(true);
    setUser(user);
  };

  return (
    <section className="users">
      <Popup
        isOpen={!!popupMsg}
        name=""
        onClose={() => setPopupMsg("")}
        title={popupMsg}
        btnText={user.uuid ? "consfirm" : ""}
        onSubmit={deleteUser}
      />
      <AddUserPopup
        isOpen={isuserFormOpen}
        onSubmit={submit}
        onClose={close}
        isUpdateBtnClicked={isUpdateBtnClicked}
        user={user}
        setUser={setUser}
      />
      <div className="users__header">
        <button className="users__btn" onClick={openuserForm}>
          <Icon
            data={iconDictionary.plus.data}
            viewbox={iconDictionary.plus.viewBox}
            fill="white"
          />
        </button>
        <Search setVal={setSearchVal} val={serachVal} />
      </div>
      <ul className="users__list">
        {(searchedUsers.length > 0 ? searchedUsers : users).map((user) => (
          <User
            user={user}
            key={user.uuid}
            onDelete={confirmDeletion}
            onEditClick={editUser}
          />
        ))}
      </ul>
    </section>
  );
};
export default Users;
