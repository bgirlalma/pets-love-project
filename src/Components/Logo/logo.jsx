import heartlogo from "../../Image/symbol-defs.svg";
import { LogoContainer, TitlePetlLogo,LogoSvg, TitleLoveLogo } from "./logo.styled";
const Logo = () => {
    return (
      <LogoContainer>
        <TitlePetlLogo>
          petl
          <LogoSvg width="13" height="13">
            <use href={`${heartlogo}#icon-heart-circle`}></use>
          </LogoSvg>
          <TitleLoveLogo>ve</TitleLoveLogo>
        </TitlePetlLogo>

        
      </LogoContainer>
    );
}

export default Logo;