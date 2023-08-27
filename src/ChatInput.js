import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider.js";
import db from "./firebase.js";
import { serverTimestamp } from "firebase/firestore";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message # ${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
