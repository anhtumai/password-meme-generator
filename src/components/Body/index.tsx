import { useReducer, useRef } from "react";
import { PasswordBlockInfo, PasswordType } from "types";

import EditCard from "./EditCard";
import NewPasswordBlock from "./NewPasswordBlock";
import AddButton from "./AddButton";
import CopyClipboardButton from "./CopyClipboardButton";
import DownloadButton from "./DownloadButton";

import { passwordBlockInfosReducer } from "reducer";

const initialPasswordBlockInfos: PasswordBlockInfo[] = [
  {
    passwordType: PasswordType.WEAK,
    password: "Sample Weak Password",
    message: "Weak",
  },
  {
    passwordType: PasswordType.STRONG,
    password: "Sample Strong Password",
    message: "Strong",
  },
];

function Body() {
  const [passwordBlockInfos, dispatchPasswordBlockInfos] = useReducer(
    passwordBlockInfosReducer,
    initialPasswordBlockInfos,
  );
  const capturedSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <div className="container w-11/12 md:w-[32rem] lg:w-[64rem] flex flex-col lg:flex-row gap-12 mx-auto py-6">
        <div className="flex-1">
          <h4 className="text-2xl font-medium leading-tight text-gray-800">
            Edit section
          </h4>
          {passwordBlockInfos.map((passwordBlockInfo, index) => (
            <EditCard
              key={index}
              passwordBlockInfo={passwordBlockInfo}
              dispatchFunction={dispatchPasswordBlockInfos}
              index={index}
            />
          ))}
          <AddButton dispatchFunction={dispatchPasswordBlockInfos} />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-medium leading-tight text-gray-800">
            Meme preview
          </h4>
          <div ref={capturedSectionRef} className="bg-white">
            {passwordBlockInfos.map(
              ({ passwordType, password, message }, index) => (
                <NewPasswordBlock
                  key={index}
                  passwordType={passwordType}
                  password={password}
                  message={message}
                />
              ),
            )}
          </div>
          <div className="inline-flex gap-12 my-4 ml-1">
            <CopyClipboardButton capturedSectionRef={capturedSectionRef} />
            <DownloadButton capturedSectionRef={capturedSectionRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
