import { Button, TextField } from "@mui/material";
import {
  Archive,
  ArrowLeft,
  BrandGithub,
  Code,
  Download,
  Folder,
  Star,
} from "@mynaui/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector.svg";

export function Chat() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    description: "",
    desiredAction: "",
    downloadLink: "",
  });

  const [name] = useState<string>(".NET to Java");

  const [isFirstRequest, setIsFirstTime] = useState<boolean>(true);

  const [answers] = useState<string>(
    "Lorem ipsum dolor sit amet consectetur. Vitae morbi ornare purus venenatis. Molestie sem accumsan felis nulla malesuada in ultricies pellentesque et. Leo tellus purus lectus senectus nulla. Arcu ornare viverra urna gravida v estibulumvitae velit lectus lectus."
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="w-[100%] min-h-[100dvh] bg-white flex-col justify-start items-start inline-flex">
      <div className="w-[100%] flex justify-center items-center">
        <div className="grow shrink basis-0 self-stretch px-5 pb-px bg-gray-50 border-b border-black border-opacity-5 justify-between items-center inline-flex">
          <div className="h-5 justify-start items-center gap-1 flex">
            <img src={logo} />
            <div className="text-black text-lg font-semibold font-['Inter'] leading-snug">
              T-refactor
            </div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="h-7 px-3 py-0.5 rounded-full flex-col justify-center items-center inline-flex">
              <div className="text-neutral-500 text-sm font-bold font-['Inter'] leading-snug">
                Home
              </div>
            </div>
            <div className="px-3 py-1 bg-zinc-100 rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-black text-sm font-bold font-['Inter'] leading-snug">
                All refactors
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
        <div className="pr-2 justify-start items-start flex">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(form);
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
                    name="downloadLink"
                    value={form.downloadLink}
                    disabled={!isFirstRequest}
                    onChange={handleChange}
                    className="w-[100%] p-2.5 rounded-md border border-neutral-200"
                  />
                </div>
              </div>
            </div>
            <Button
              className="self-stretch px-3.5 py-2.5  rounded-md justify-center items-center gap-1 flex"
              sx={{
                background: "black",
                textTransform: "none",
                color: "white",
                borderRadius: "8px",
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
          <div className="self-stretch pl-7 pr-14 pt-7 pb-10 flex-col justify-start items-center gap-3 flex">
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
                    {answers}
                  </span>
                </div>

                <Button
                  className="px-4 py-3 rounded-lg border-black justify-start items-center gap-10 inline-flex"
                  sx={{
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
                </Button>
              </div>
              <div className="flex-col justify-start items-start gap-8 flex">
                <div className="w-[100%]">
                  <span className="text-black text-lg font-semibold font-['Inter'] leading-relaxed">
                    Is this project working correctly?
                    <br />
                  </span>
                  <span className="text-slate-800 text-lg font-normal font-['Inter'] leading-relaxed">
                    <br />
                    Could you please confirm if the code provided is functioning
                    correctly? If there are any issues or errors, please let me
                    know, and I'll be happy to assist you in ensuring that the
                    code works as intended.
                  </span>
                </div>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <Button
                    className="grow shrink basis-0 h-11 px-4 py-3 rounded-lg border border-neutral-200 justify-start items-center gap-10 flex"
                    onClick={() => {
                      setIsFirstTime(false);
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
