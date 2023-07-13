import { styled } from "styled-components";

export const RoomList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  li {
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const ChatRoomContainer = styled.div`
  position: relative;
  width: 480px;
  height: 100%;
`;

export const RoomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: calc(100% - 60px);
  background-color: #e9e9e9;
  padding: 16px;
`;

export const InputSection = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 16px;
  gap: 8px;
  input {
    flex: 1;
    border-radius: 4px;
  }
  button {
    border: none;
    border-radius: 4px;
    background-color: rgb(25, 195, 125);
  }
`;

export const ChatWrapper = styled.div<{ type: "send" | "receive" }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 16px 16px;
  align-items: ${({ type }) =>
    type === "receive" ? "flex-start" : "flex-end"};
  h4 {
    margin: 0;
  }
`;
