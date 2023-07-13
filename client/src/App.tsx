import dayjs from "dayjs";
import * as Style from "./styles";
import { useNavigate } from "react-router-dom";

// 채팅방 더미 데이터
const CHAT_ROOMS = [
  {
    roomIdx: "123",
    roomTitle: "채팅방 123",
  },
  {
    roomIdx: "456",
    roomTitle: "채팅방 456",
  },
];

function App() {
  const navigate = useNavigate();
  // userIdx를 임시로 날짜데이터 사용...
  const userIdx = dayjs(new Date()).format("YYYYMMDDhhmmss");
  return (
    <>
      <Style.RoomList>
        {CHAT_ROOMS.map((room) => (
          <li
            key={room.roomIdx}
            onClick={() =>
              navigate(`/chatroom/${room.roomIdx}`, {
                state: {
                  userIdx,
                },
              })
            }
          >
            <h3>{room.roomTitle}</h3>
          </li>
        ))}
      </Style.RoomList>
    </>
  );
}

export default App;
