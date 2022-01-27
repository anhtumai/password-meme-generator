import { useReducer } from "react";
import { PasswordBlockInfo, PasswordType } from "types";

import EditCard from "./EditCard";
import NewPasswordBlock from "./NewPasswordBlock";

import { passwordBlockInfosReducer } from "reducer";
import AddButton from "./AddButton";

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
  return (
    <div className="relative">
      <div className="container w-72 md:w-[48rem] lg:w-[64rem] flex flex-col md:flex-row gap-12 mx-auto">
        <div className="flex-1 w-full">
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
        <div className="flex-1 w-full">
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
      </div>
    </div>
  );
}

export default Editor;
