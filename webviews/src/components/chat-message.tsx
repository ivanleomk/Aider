import { cn } from "../lib/utils";

type Props = {
  message: {
    role: "user" | "system" | "assistant";
    content: string;
  };
};

const ChatMessage = ({ message }: Props) => {
  return (
    <div className={cn("group relative mb-4 flex items-start md:-ml-12")}>
      <div className={cn("px-4")}>
        {message.role === "user" ? <p>User</p> : <p>Assistant</p>}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
