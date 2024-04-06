import { Code, Plus, Search } from "@mynaui/icons-react";
import logo from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";

export function AllRefactors() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] flex-col justify-start items-start inline-flex">
      <div className="w-[100%] flex justify-center items-center">
        <div className="grow shrink basis-0 self-stretch px-5 pb-px bg-gray-50 border-b border-black border-opacity-5 justify-between items-center inline-flex">
          <div className="h-5 justify-start items-center gap-1 flex">
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
              navigate("/chat");
            }}
          >
            <div className="px-3.5 py-2.5 bg-black rounded-md justify-center align-center items-start flex">
              <div className="justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <Plus color="white" fontSize="40px" />
                </div>
                <div className="pl-1.5 flex-col justify-start items-start inline-flex">
                  <div className="justify-center items-center inline-flex">
                    <div className="text-center text-white text-sm font-bold font-['Inter'] leading-none">
                      New refactor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="justify-start w-[100%] items-start inline-flex">
        <div className="p-20 flex-col w-[100%] max-w-[1400px] mx-auto justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-14  flex-col justify-start items-start flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-black text-2xl font-bold font-['Inter'] leading-loose">
                  All refactors
                </div>
              </div>
              <div className="justify-start items-center gap-5 flex">
                <div className="h-9 px-2.5 py-1.5 bg-zinc-100 rounded-md border justify-start items-center gap-1 flex">
                  <Search color="black" fontSize="20px" />
                  <input
                    className="h-9 px-2.5 py-1.5 bg-zinc-100 rounded-md border justify-start items-center gap-1 flex text-black text-xs font-normal font-['Inter'] leading-snug"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-start gap-[12px] flex-wrap flex">
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    .NET to Java
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Mon 13, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Python2 to Python3
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Mon 1, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Java to node.js
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Mon 24, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Tailwind to mui
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Wed 27, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Legacy to current
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Wed 31, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    jQuery to Vue
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Tue 5, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Java12 to Java21
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Tue 14, 2024
                </div>
              </div>
            </div>
            <div className="w-72 h-64 p-6 bg-white rounded-2xl border flex-col justify-between items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-8 justify-start items-center gap-2.5 flex">
                  <div className="p-1 bg-gray-200 bg-opacity-70 rounded-md justify-start items-center gap-2.5 flex">
                    <Code color="black" fontSize="20px" />
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
                    Angular to React
                  </div>
                </div>
                <div className="h-4 flex-col justify-center items-start inline-flex">
                  <div className="w-4 h-4 px-px justify-center items-center inline-flex" />
                </div>
              </div>
              <div className="self-stretch h-4 pr-44 flex-col justify-start items-start flex">
                <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                  Sat 9, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-16 pt-5 justify-center items-center flex">
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
