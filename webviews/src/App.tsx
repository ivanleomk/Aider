import ChatMessage from "./components/chat-message";
import EmptyScreen from "./components/empty-screen";
import IconArrowElbow from "./components/icon-right-elbow";
import { Textarea } from "./components/textarea";
import { useEnterSubmit } from "./lib/hooks/use-enter-submit";
import { cn } from "./lib/utils";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState<
    { content: string; role: "user" | "system" | "assistant" }[]
  >([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    setMessages([
      ...messages,
      {
        role: "user",
        content: userInput,
      },
    ]);

    setUserInput("");
  };
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="max-w-md mx-auto my-10">
      <div className={cn("pb-[200px] pt-4 md:pt-10", "")}>
        {messages.length > 0 ? (
          messages.map((message, index) => {
            return <ChatMessage message={message} />;
          })
        ) : (
          <EmptyScreen />
        )}
      </div>
      <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
        <div className="mx-auto sm:max-w-2xl sm:px-4">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!userInput.trim()) {
                return;
              }
              handleSubmit();
            }}
            className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4"
          >
            <div className="flex items-start">
              <Textarea
                placeholder="Type your message here"
                rows={1}
                tabIndex={0}
                value={userInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              />
              <button type="submit" className="mt-2 mx-4 hover:cursor-pointer ">
                <IconArrowElbow />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
