import { useEffect, useState } from "react";
import heartlogo from "../../Image/symbol-defs.svg";
import { LogoContainer, TitlePetlLogo,LogoSvg, TitleLoveLogo } from "./logo.styled";
const Logo = () => {
  const [sizeWindow, setSizeWindow] = useState({ width: 13, height: 13 });
  
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 768) {
        setSizeWindow({ width: 23, height: 23 });
      }
    }
    updateSize()

    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, []);


    return (
      <LogoContainer>
        <TitlePetlLogo>
          petl
          <LogoSvg width={sizeWindow.width} height={sizeWindow.height}>
            <use href={`${heartlogo}#icon-heart-circle`}></use>
          </LogoSvg>
          <TitleLoveLogo>ve</TitleLoveLogo>
        </TitlePetlLogo>
      </LogoContainer>
    );
}

export default Logo;