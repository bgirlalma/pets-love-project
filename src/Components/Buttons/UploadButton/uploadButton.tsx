import React from "react";
import { ButtonUpdateImg, UploadImageIContainer } from "./uploadButton.styled"
import { UploadIcon } from "../../../Image/userimg/upload-cloud";

interface UploadProps {
    handleButtonClick: () => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleImageChange:(e: React.ChangeEvent<HTMLInputElement>) => void ;
}

const ButtonUploadComponent: React.FC<UploadProps> = ({handleButtonClick, fileInputRef, handleImageChange}) => {
    return (
      <>
        <ButtonUpdateImg onClick={handleButtonClick}>
          Upload photo
          <UploadImageIContainer>
            <UploadIcon />
          </UploadImageIContainer>
        </ButtonUpdateImg>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </>
    );
}

export default ButtonUploadComponent;