import { useEffect } from "react";
import Icon from "../Icon";
import { iconDictionary } from "../iconDictionary";

interface IPopup {
  isOpen: boolean;
  name: string;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
  btnText?: string;
  onSubmit?: () => void;
}
const Popup = ({
  isOpen,
  name,
  onClose,
  children,
  title,
  btnText,
  onSubmit,
}: IPopup) => {
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

  return (
    <div
      className={`popup popup_${name} ` + (isOpen && "popup_open")}
      onClick={handleClickOnOverlayClose}
      onKeyDown={handleEscClose}
      tabIndex={0}
    >
      <div
        className={`popup__content popup__content_${name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`popup__close-btn popup__close-btn_${name}`}
          onClick={close}
        >
          <Icon
            data={iconDictionary.plus.data}
            fill="white"
            viewbox={iconDictionary.plus.viewBox}
            className="popup__close-btn-img"
          />
        </button>
        <div className={`popup__form popup__form_${name}`}>
          <h2 className={`popup__title popup__title_theme_${name}`}>{title}</h2>
          {children}
          {btnText && (
            <button type="button" className="popup__btn" onClick={onSubmit}>
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
