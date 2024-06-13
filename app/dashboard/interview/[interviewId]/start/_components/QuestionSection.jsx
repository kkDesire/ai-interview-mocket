import { cn } from "@/lib/utils";
import { Lightbulb, Volume2 } from "lucide-react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeach = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Web Speech API is not available in this browser 🤷‍");
    }
  };
  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion
          ? mockInterviewQuestion.map((question, index) => (
              <h2
                key={question.question}
                className={cn(
                  "p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer",
                  {
                    "bg-primary text-white": activeQuestionIndex === index,
                  }
                )}
              >
                Question #{index + 1}
              </h2>
            ))
          : null}
      </div>
      <h2 className="my-5 text-md md:text-lg">
        {mockInterviewQuestion
          ? mockInterviewQuestion[activeQuestionIndex].question
          : null}
      </h2>
      <Volume2
        className="cursor-pointer"
        onClick={() =>
          textToSpeach(mockInterviewQuestion[activeQuestionIndex].question)
        }
      />
      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note: </strong>
        </h2>
        <h2 className="text-sm text-primary my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </h2>
      </div>
    </div>
  );
}

export default QuestionSection;
