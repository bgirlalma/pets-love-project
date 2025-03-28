import { Form } from "formik";
import styled from "styled-components";

export const MenuContainer = styled.div`
  //   margin-right: auto;
  //   margin-left: auto;
`;

// user block start

export const MainUserContainer = styled.div`
  padding: 20px 20px 40px 20px;
  border-radius: 30px;
  margin: 0 20px 40px 20px;
  background-color: rgba(255, 255, 255, 1);
`;

export const UserBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(246, 184, 61, 1);
  border-radius: 30px;

  width: 80px;
  height: 40px;
`;

export const UserBlockName = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  margin-right: 5px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 28px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);
`;

// user block end

// avatar block start
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const DefaultImgAvatar = styled.img`
  border-radius: 50%;
  background-color: rgba(238, 238, 238, 1);
`;

//avatar block end

// information block start

export const InformationContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleInformation = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);

  margin-bottom: 20px;
`;

export const FormInformation = styled(Form)`
  input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    border-radius: 30px;
    margin-bottom: 12px;
     

font-weight: 500;
font-size: 14px;
line-height: 18px;
color: rgba(38, 38, 38, 1);
  }

  input: last-of-type {
    margin-bottom: 0;
  }

  input: hover, 
  input: focus{
   border: 1px solid rgba(246, 184, 61, 1);
   outline: none;
  }
`;

// block information end

// block pets start

export const PetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PetsTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
`;

export const ButtonAddPets = styled.button`
  width: 100px;
  height: 38px;

  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  svg {
    margin-left: 5px;
  }
`;
// block pets end

export const LogOutUserButton = styled.button`
  width: 115px;
  height: 40px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: rgba(246, 184, 61, 1);
`;

export const ViewedFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 20px 20px;
`;
