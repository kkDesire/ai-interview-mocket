"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRate, setOverallRate] = useState(0);
  const router = useRouter();
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);

    setFeedbackList(result);
  };

  const CalculateOverallRating = () => {
    console.log("feedbackList", feedbackList);
    const totalRating = feedbackList.reduce(
      (acc, curr) => acc + Number(curr.rating),
      0
    );
    setOverallRate((totalRating / feedbackList.length) * 2);
  };

  useEffect(() => {
    GetFeedback();
  }, []);
  useEffect(() => {
    feedbackList && CalculateOverallRating();
  }, [feedbackList]);
  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="text-xl font-bold text-gray-500">
          No Interview Feedback Record found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations!
          </h2>
          <h2 className="text-2xl font-bold">
            Here is your interview feedback
          </h2>
          <h2 className="text-primary text-lg my-3">
            Your overall interview rating: <strong>{overallRate}/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview question with correct answer, Your answer and
            feedback for improvement
          </h2>
          {feedbackList.map((item, index) => (
            <Collapsible key={item.id} className="mt-7">
              <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex gap-7 w-full justify-between">
                {item.question} <ChevronsUpDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg">
                    <strong>Rating: </strong>
                    {item.rating}
                  </h2>
                  <h2 className="bg-red-50 p-2 border rounded-lg text-sm text-red-900">
                    <strong>User Answer: </strong>
                    {item.userAns}
                  </h2>
                  <h2 className="bg-green-50 p-2 border rounded-lg text-sm text-green-900">
                    <strong>Correct Answer: </strong>
                    {item.correctAns}
                  </h2>
                  <h2 className="bg-blue-50 p-2 border rounded-lg text-sm text-primary">
                    <strong>Feedback: </strong>
                    {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button className="mt-3" onClick={() => router.replace("/dashboard")}>
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
