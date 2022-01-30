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

function Editor() {
  const [passwordBlockInfos, dispatchPasswordBlockInfos] = useReducer(
    passwordBlockInfosReducer,
    initialPasswordBlockInfos,
  );
  const capturedSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <div className="container w-11/12 md:w-[32rem] lg:w-[64rem] flex flex-col lg:flex-row gap-12 mx-auto">
        <div className="flex-1">
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
          <div className="inline-flex gap-12 m-4">
            <CopyClipboardButton capturedSectionRef={capturedSectionRef} />
            <DownloadButton capturedSectionRef={capturedSectionRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
