import styled from "styled-components";

export const FriendsCard = styled.ul`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 28px;
  }
`;

export const Card = styled.li`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 335px;
  height: 184px;
  opacity: 1;
  border-radius: 15px;
  padding: 12px 12px 0 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 196px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const FriendsWorkTime = styled.p`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 8px;
  border-radius: 30px;
  color: rgba(246, 184, 61, 1);
  background-color: rgba(255, 244, 223, 1);

  @media screen and (min-width: 768px) {
    width: 100px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const PositionContainer = styled.div`
position: absolute;
top: 60%;
left: 20px;
transform: translateY(-60%);
  display: flex;
  align-items: center;
`;

export const DescContainer = styled.div``;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 20px;
  }
`;

export const FriendsName = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;

export const FriendsAddress = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`;

export const FriendsEmail = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`;

export const FriendsPnone = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`;
