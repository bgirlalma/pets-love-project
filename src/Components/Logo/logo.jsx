import { useEffect, useState } from "react";
import heartlogo from "../../Image/symbol-defs.svg";
import { LogoContainer, TitlePetlLogo,LogoSvg, TitleLoveLogo } from "./logo.styled";
import { HeartHeaderWhite } from "../../Image/userimg/heart-circle";
const Logo = () => {
  const [sizeWindow, setSizeWindow] = useState({ width: 13, height: 13 });
  const isHome = location.pathname === "/pets/home";

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 768) {
        setSizeWindow({ width: 23, height: 23 });
      }
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <LogoContainer>
      <TitlePetlLogo $isHome={isHome}>
        petl
        {isHome ? (
            <HeartHeaderWhite />
        ) : (
          <LogoSvg width={sizeWindow.width} height={sizeWindow.height}>
            <use href={`${heartlogo}#icon-heart-circle`}></use>
          </LogoSvg>
        )}
        <TitleLoveLogo $isHome={isHome}>ve</TitleLoveLogo>
      </TitlePetlLogo>
    </LogoContainer>
  );
}

export default Logo;