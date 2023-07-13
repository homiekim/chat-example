import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
// back url 은 chat namespace 사용
const back_url = "http://localhost:3010/chat";
const sockets: { [key: string]: Socket } = {};
const useSocket = (idx: string) => {
  // socket 유지를 위햇 state에 socket 인스턴스를 담아서 사용함
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  // useEffect로 소켓 연결시 개밞 모드에서 useEffect가 2번 실행 되기 때문에 socket이 없을 경우만 연결 있는 경우 state로 업데이트
  useEffect(() => {
    if (!sockets[idx]) {
      sockets[idx] = io(back_url, {
        autoConnect: false,
        transports: ["websocket"],
        query: { roomIdx: idx },
      });
    }
    if (sockets[idx]) {
      sockets[idx].connect();
      setSocket(sockets[idx]);
    }

    return () => {
      // 언마운트 시에 socket disconnect
      if (sockets[idx]) {
        sockets[idx].disconnect();
        delete sockets[idx];
      }
    };
    /* eslint-disable-next-line */
  }, []);

  return { socket };
};

export default useSocket;
