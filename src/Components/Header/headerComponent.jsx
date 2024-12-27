import Logo from "../Logo/logo";
import { HeaderContainer } from "./headerComponent.styled";
import { IconMenu } from "../../Image/menu";

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Logo />
      <IconMenu />
    </HeaderContainer>
  );
};

export default HeaderComponent;
