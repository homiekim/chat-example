import * as Style from "../styles";
import { Chat } from "../ChatRoom";
interface Props {
  type: "send" | "receive";
  data: Chat;
}
const ChatItem = ({ type, data }: Props) => {
  return (
    <Style.ChatWrapper type={type}>
      <h4>user : {data.userIdx}</h4>
      <span>message : {data.message}</span>
    </Style.ChatWrapper>
  );
};

export default ChatItem;
