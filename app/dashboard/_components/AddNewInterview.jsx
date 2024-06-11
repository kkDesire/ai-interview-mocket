"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState();

  const { user } = useUser();
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(jobPosition, jobDesc, jobExperience);
    const InputPrompt = `Job postion: ${jobPosition}, Job Descriptioon: ${jobDesc}, Years of Experience: ${jobExperience}, Depends on Job Position, Job Description and Years of Experience, Give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Interview question along with Answer in Json format, Give us gestion with answer field on JSON`;
    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    setJsonResponse(MockJsonResp);
    console.log(JSON.parse(MockJsonResp));
    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({
          mockId: MockInterview.mockId,
        });

      console.log("Inserted ID", resp);

      if (resp) {
        setOpenDialog(false);
      }
    } else {
      console.error("ERROR MESSAGE");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-sm cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <h2>
                  Add detail about your job position/role, job description and
                  year of experience
                </h2>
                <div className="mt-7 my-3">
                  <label htmlFor="jobPosition">Job Role/Job Position </label>
                  <Input
                    id="jobPosition"
                    placeholder="Ex. Full Stack Developper"
                    onChange={(event) => setJobPosition(event.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="jobDesc">
                    Job Description/ Tech Stack (In Short){" "}
                  </label>
                  <Textarea
                    id="jobDesc"
                    placeholder="Ex. React,Vuejs, Nodejs, MySql etc..."
                    onChange={(event) => setJobDesc(event.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="jobExperience">Years of experience</label>
                  <Input
                    id="jobExperience"
                    placeholder="Ex.5"
                    type="number"
                    max="50"
                    onChange={(event) => setJobExperience(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="flex gap-5 justify-end">
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button disabled={loading} type="submit">
                      {loading ? (
                        <>
                          <LoaderCircle className="animate-spin" /> Generatiing
                          from AI...
                        </>
                      ) : (
                        "Start Interview"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
