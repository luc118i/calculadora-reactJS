import { InputContainer } from "./Styles";
import PropTypes from "prop-types";
const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  //onClick: PropTypes.func.isRequired,
};

export default Input;
