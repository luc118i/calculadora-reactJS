import PropTypes from "prop-types";
import { ButtonCotainer } from "./Styles";

const Button = ({ label, onClick }) => {
  return (
    <ButtonCotainer onClick={onClick}>
      {label === "backspace" ? (
        <span className="material-symbols-outlined">keyboard_backspace</span>
      ) : label === "clear" ? (
        <span className="material-symbols-outlined">delete_forever</span>
      ) : (
        label
      )}
    </ButtonCotainer>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
