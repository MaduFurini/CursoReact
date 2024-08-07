import { ButtonContaier } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonContaier onClick={onClick} type="button">
        {label}
      </ButtonContaier>
    );
  }
  
  export default Button;
  