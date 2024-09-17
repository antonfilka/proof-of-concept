import { classLister } from "@/utils";
import styles from "./index.module.css";

const users = [
  {
    name: "James",
  },
  {
    name: "Mike",
  },
  {
    name: "Steve",
  },
  {
    name: "Joe",
  },
  {
    name: "Pavel",
  },
  {
    name: "Moe",
  },
  {
    name: "Sarah",
  },
  {
    name: "James",
  },
  {
    name: "Mike",
  },
  {
    name: "Steve",
  },
  {
    name: "Joe",
  },
  {
    name: "Pavel",
  },
  {
    name: "Moe",
  },
  {
    name: "Sarah",
  },
];

const messages = [
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
  { senderName: "James", message: "Hello!", position: "left" },
  { senderName: "Joe", message: "Hello!", position: "right" },
];

export default function Messenger() {
  const classes = classLister(styles);

  return (
    <div className={classes("wrapper")}>
      <header className={classes("header")}>
        <h1 className="text-xl font-[700]">
          Messenger prototype based on Grid CSS
        </h1>
      </header>
      <div className={classes("nav")}>
        {users.map((user, i) => (
          <div key={i} className={classes("userNav")}>
            <div className={classes("avatar")}></div>
            <h3 className="text-md">{user.name}</h3>
          </div>
        ))}
      </div>
      <div className={classes("messenger")}>
        <div className={classes("messages")}>
          {messages.map((message, i) => {
            const messageClass = [
              "message",
              message.position === "left" ? " " : "rightMessage",
            ];
            return (
              <div key={i} className={classes(...messageClass)}>
                <h2 className={classes("senderName")}>{message.senderName}</h2>
                <h3 className={classes("messageText")}>{message.message}</h3>
              </div>
            );
          })}
        </div>
        <div className={classes("input")}>
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
