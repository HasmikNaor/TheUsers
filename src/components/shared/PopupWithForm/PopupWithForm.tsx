import { useEffect } from "react";
import Icon from "../Icon";
import { iconDictionary } from "../iconDictionary";

interface IPopupWithForm {
  onClose: () => void;
  name: string;
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  onSubmit: () => void;
  btnText: string;
  isBtnDisabled: boolean;
}
const PopupWithForm = ({
  onClose,
  name,
  isOpen,
  children,
  title,
  onSubmit,
  btnText,
  isBtnDisabled,
}: IPopupWithForm) => {
  const close = () => {
    onClose();
  };

  const handleEscClose = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      close();
    }
  };

  const handleClickOnOverlayClose = () => {
    close();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div
      className={`popup popup_${name} ` + (isOpen && "popup_open")}
      onClick={handleClickOnOverlayClose}
      onKeyDown={handleEscClose}
      tabIndex={0}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button
          className={`popup__close-btn popup__close-btn_${name}`}
          onClick={close}
        >
          <Icon
            data={iconDictionary["plus"].data}
            viewbox={iconDictionary["plus"].viewBox}
            fill="white"
          />
        </button>
        <form
          className={`popup__form popup__form_${name}`}
          onSubmit={handleSubmit}
        >
          <h2 className={`popup__title popup__title_theme_${name}`}>{title}</h2>
          {children}
          <button
            type="submit"
            className="popup-with-form__save-btn"
            disabled={isBtnDisabled}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
