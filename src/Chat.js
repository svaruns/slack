import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import db from "./firebase";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";

import "./Chat.css";
import Message from "./Message";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState();
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userimage }) => {
          return (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userimage}
            />
          );
        })}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
