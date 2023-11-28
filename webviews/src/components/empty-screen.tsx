import { ArrowRight } from "lucide-react";

const exampleMessages = [
  {
    heading: "Explain Technical Questions",
    message: `What is a React functional component?`,
  },
  {
    heading: "Summarize your current tickets",
    message: "What's the status of my current items marked as todo?",
  },
  {
    heading: "Get some help",
    message: `Help me to rewrite this code and figure out what's wrong with it`,
  },
];

const EmptyScreen = () => {
  return (
    <div className="">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to Aider</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an Open Source repository built for Code Jam to showcase how
          to work with LLMs in production
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start">
          {exampleMessages.map((message, index) => (
            <div
              key={index}
              className="flex inline-items gap-x-2 items-center my-2"
            >
              <ArrowRight className="h-5" />
              {message.heading}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyScreen;
