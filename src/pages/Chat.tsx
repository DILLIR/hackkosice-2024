import { Button, TextField } from "@mui/material";
import {
  Archive,
  ArrowLeft,
  BrandGithub,
  Code,
  Star,
} from "@mynaui/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector.svg";
import { Loader } from "../components/Loader";

export function Chat() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    server: "",
    description: "",
    desiredAction:
      "Change all php code to python code, and answer ONLY! updated code",
    github: "https://github.com/drnic/php-helloworld",
    requestedChanges: "",
  });

  const [name] = useState<string>("New chat");

  const [isFirstRequest, setIsFirstTime] = useState<boolean>(true);
  const [isValidAnswer, setIsValidAnswer] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // const [answer, setAnswer] = useState<string | null>("After conducting a thorough review of the given codebase and considering the instructions provided, I have identified several areas where Python code could be implemented to replace existing PHP code. However, without additional context or guidelines, I cannot provide a complete and comprehensive answer to the task at hand. To proceed with the conversion process, I recommend the following steps: 1. Identify all instances of <?php echo...in the codebase and determine if they can be replaced with equivalent Python code. 2. Refactor any functions or methods that are not already implemented in Python to align with Python programming principles. 3. Ensure that all updates are properly tested and integrated into the overall codebase. 4. Provide a complete and comprehensive answer to the task, including any necessary changes to the code structure and function calls. I understand the importance of this task and will approach it with caution and attention to detail to ensure the best possible outcome.");

  const [answer, setAnswer] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    setLoading(true);
    await fetch(form.server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
        "Keep-Alive": `timeout=${5 * 60}, max=1000`,
      },
      body: JSON.stringify({
        desiredAction: form.description,
        description: form.desiredAction,
        url: form.github,
        requestedChanges: form.requestedChanges,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnswer(data.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="w-[100%] min-h-[100dvh] bg-white flex-col justify-start items-start inline-flex">
      <div className="w-[100%] flex justify-center items-center">
        <div className="grow shrink basis-0 self-stretch px-5 bg-gray-50 border-b border-black border-opacity-5 justify-between items-center flex">
          <div className=" justify-start items-start flex flex-col">
            <div className="h-5 justify-start items-center gap-1 flex">
              <img src={logo} />
              <div className="text-black text-lg font-semibold font-['Inter'] leading-snug">
                T-refactor
              </div>
            </div>
            <div className="text-[#E30074] text-sm font-semibold font-['Inter'] pl-[30px]">
              by Deutsche Telekom
            </div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="h-7 px-3 py-0.5 rounded-full flex-col justify-center items-center inline-flex">
              <div className="text-neutral-500 text-sm font-bold font-['Inter'] leading-snug">
                All refactors
              </div>
            </div>
            <div className="px-3 py-1 bg-zinc-100 rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-black text-sm font-bold font-['Inter'] leading-snug">
                Chat
              </div>
            </div>
          </div>
          <button
            className="h-16 justify-end items-center gap-5 flex"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="px-3.5 py-2.5 bg-black rounded-md justify-center align-center items-start flex">
              <div className="justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <ArrowLeft color="white" fontSize="40px" />
                </div>
                <div className="pl-1.5 flex-col justify-start items-start inline-flex">
                  <div className="justify-center items-center inline-flex">
                    <div className="text-center text-white text-sm font-bold font-['Inter'] leading-none">
                      Back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch  grow justify-stretch items-stretch inline-flex">
        <div className="pr-2 justify-start items-start flex w-[100%]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="self-stretch p-6 min-w-[450px] bg-white border-r border-zinc-100 flex-col justify-between items-center flex"
          >
            <div className="self-stretch flex-col justify-start items-start gap-14 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    {name}
                  </div>
                  <div className="w-48 bg-zinc-100 rounded-lg justify-center items-center flex">
                    <div className="px-3 py-1 bg-black rounded-lg justify-center items-center gap-1 flex">
                      <BrandGithub color="white" />
                      <div className="text-white text-sm font-bold font-['Inter'] leading-snug">
                        GitHub
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-zinc-100 rounded-lg justify-center items-center gap-1 flex">
                      <Archive color="black" />
                      <div className="text-neutral-500 text-sm font-bold font-['Inter'] leading-snug">
                        Archive
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col w-[100%] justify-start items-start gap-6 flex">
                <div className="h-10 w-[100%] flex-col justify-center items-start gap-3 flex">
                  <div className="w-[100%] justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal">
                      Server
                    </div>
                  </div>
                  <TextField
                    value={form.server}
                    onChange={handleChange}
                    disabled={!isFirstRequest}
                    name="server"
                    className="w-[100%] h-24 px-2.5 py-2 rounded-md border border-neutral-200"
                  />
                </div>
              </div>
              <div className="flex-col w-[100%] justify-start items-start gap-6 flex">
                <div className="h-32 w-[100%] flex-col justify-center items-start gap-3 flex">
                  <div className="w-[100%] justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal">
                      Project description
                    </div>
                  </div>
                  <TextField
                    value={form.description}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    disabled={!isFirstRequest}
                    name="description"
                    className="w-[100%] h-24 px-2.5 py-2 rounded-md border border-neutral-200"
                  />
                </div>
                <div className="h-20 w-[100%] flex-col justify-center items-start  flex">
                  <div className="w-[100%] justify-between items-center inline-flex">
                    <div className="w-[100%] grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal">
                      Type of improvement
                    </div>
                  </div>
                  <TextField
                    className="w-[100%] p-2.5 rounded-md border border-neutral-200"
                    value={form.desiredAction}
                    disabled={!isFirstRequest}
                    onChange={handleChange}
                    name="desiredAction"
                  />
                </div>

                <div className="h-20 w-[100%] flex-col justify-center items-start gap-3 flex">
                  <div className="w-[100%] justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal">
                      Upload github link
                    </div>
                  </div>
                  <TextField
                    name="github"
                    value={form.github}
                    disabled={!isFirstRequest}
                    onChange={handleChange}
                    className="w-[100%] p-2.5 rounded-md border border-neutral-200"
                  />
                </div>
              </div>
              {isValidAnswer === false && (
                <div className="h-20 w-[100%] flex-col justify-center items-start  flex">
                  <div className="w-[100%] justify-between items-center inline-flex">
                    <div className="w-[100%] grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-normal">
                      What needs to changed?
                    </div>
                  </div>
                  <TextField
                    className="w-[100%] p-2.5 rounded-md border border-neutral-200"
                    value={form.requestedChanges}
                    multiline
                    rows={3}
                    onChange={handleChange}
                    name="requestedChanges"
                  />
                </div>
              )}
            </div>
            <Button
              className="self-stretch px-3.5 py-2.5 mt-[10px] rounded-md justify-center items-center gap-1 flex"
              sx={{
                background: "black",
                textTransform: "none",
                color: "white",
                borderRadius: "8px",
                marginTop: "20px",
                ":hover": {
                  opacity: 0.8,
                  background: "black",
                },
              }}
              type="submit"
            >
              <Star height="16px" />
              Generate refactor
            </Button>
          </form>
          <div
            className="self-stretch pl-7 pr-14 pt-7 pb-10 flex-col justify-start w-[100%] items-center gap-3 flex"
            style={{ position: "relative" }}
          >
            {loading && <Loader />}
            {!loading && answer != null && (
              <>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <Star color="black" />
                  <div className="text-slate-800 text-base font-semibold font-['Inter'] leading-normal">
                    Result
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-10 inline-flex">
                  <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="w-[100%]">
                      <span className="text-black text-lg font-semibold font-['Inter'] leading-relaxed">
                        Refactored {name}
                        <br />
                      </span>
                      <span className="text-slate-800 text-lg font-normal font-['Inter'] leading-relaxed">
                        <br />
                        {answer}
                      </span>
                    </div>
                    {/* 
                    <Stack
                      component="a"
                      href="https://github.com/DILLIR/hackkosice-2024/archive/refs/heads/main.zip"
                      download={true}
                      className="px-4 py-3 rounded-lg border-black justify-start items-center gap-10 inline-flex"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "2px solid black",
                        textAlign: "left",
                        borderRadius: "10px",
                        "&:hover": { background: "white", opacity: "0.7" },
                      }}
                    >
                      <div className="grow shrink basis-0 h-9 justify-start items-center gap-2.5 flex">
                        <Folder color="black" />
                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">
                            t-refactor-answer.zip
                          </div>
                          <div className="self-stretch text-zinc-600 text-xs font-medium font-['Inter'] leading-none">
                            2.7 Mb
                          </div>
                        </div>
                      </div>
                      <Download color="black" />
                    </Stack> */}
                  </div>
                  <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="w-[100%]">
                      <span className="text-black text-lg font-semibold font-['Inter'] leading-relaxed">
                        Is this project working correctly?
                        <br />
                      </span>
                      <span className="text-slate-800 text-lg font-normal font-['Inter'] leading-relaxed">
                        <br />
                        Could you please confirm if the code provided is
                        functioning correctly? If there are any issues or
                        errors, please let me know, and I'll be happy to assist
                        you in ensuring that the code works as intended.
                      </span>
                    </div>
                    <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                      <Button
                        className="grow shrink basis-0 h-11 px-4 py-3 rounded-lg border border-neutral-200 justify-start items-center gap-10 flex"
                        onClick={() => {
                          setIsFirstTime(false);
                          setIsValidAnswer(true);
                        }}
                        sx={{
                          border: "2px solid black",
                          textAlign: "left",
                          borderRadius: "10px",
                          textTransform: "none",
                          "&:hover": { background: "white", opacity: "0.7" },
                        }}
                      >
                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
                          <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                            <div className="self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">
                              Yes, everything works
                            </div>
                          </div>
                        </div>
                      </Button>
                      <Button
                        className="grow shrink basis-0 h-11 px-4 py-3 rounded-lg border border-neutral-200 justify-start items-center gap-10 flex"
                        onClick={() => {
                          setIsFirstTime(false);
                          setIsValidAnswer(false);
                        }}
                        sx={{
                          border: "2px solid black",
                          textAlign: "left",
                          borderRadius: "10px",
                          textTransform: "none",
                          "&:hover": { background: "white", opacity: "0.7" },
                        }}
                      >
                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
                          <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                            <div className="self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">
                              No, the code has errors
                            </div>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-16 mt-auto justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch px-5 pb-px bg-gray-50 border-b border-black border-opacity-5 justify-between items-center inline-flex">
          <div className="h-5 justify-start items-center gap-1 flex">
            <img src={logo} />
            <div className="text-zinc-400 text-lg font-semibold font-['Inter'] leading-snug">
              T-refactor
            </div>
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
            ©T-factor, All rights reserved 2024
          </div>
        </div>
      </div>
    </div>
  );
}
