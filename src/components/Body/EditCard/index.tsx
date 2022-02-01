import { Disclosure, Transition } from "@headlessui/react";
import { ChangeEvent, Dispatch } from "react";
import {
  PasswordBlockInfo,
  DispatchAction,
  DispatchType,
  PasswordType,
} from "types";

import DropdownPasswordType from "./DropdownPasswordType";
import EmojiPicker from "./EmojiPicker";

function EditCard({
  passwordBlockInfo,
  dispatchFunction,
  index,
}: {
  passwordBlockInfo: PasswordBlockInfo;
  dispatchFunction: Dispatch<DispatchAction>;
  index: number;
}) {
  const { passwordType, password, message } = passwordBlockInfo;

  function handlePasswordTypeChange(updatedPasswordType: PasswordType) {
    const updatedItem = {
      passwordType: updatedPasswordType,
      password,
      message,
    };
    dispatchFunction({ type: DispatchType.UPDATE, index, updatedItem });
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedItem = {
      passwordType,
      password: event.target.value,
      message,
    };
    dispatchFunction({ type: DispatchType.UPDATE, index, updatedItem });
  }

  function handleMessageChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedItem = {
      passwordType,
      password,
      message: event.target.value,
    };
    dispatchFunction({ type: DispatchType.UPDATE, index, updatedItem });
  }

  function handleDelete() {
    if (window.confirm(`Delete Edit card #${index + 1}?`)) {
      dispatchFunction({ type: DispatchType.DELETE, index });
    }
  }

  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div className="flex flex-col bg-white shadow-lg rounded-lg border-2 border-gray-400 my-4 px-6">
          <div className="flex py-4">
            <div className="grow text-gray-700 text-md pt-1">
              Edit card <span className="text-gray-500 pl-2">#{index + 1}</span>
            </div>
            <Disclosure.Button
              className={`mr-12 text-blue-700 text-lg ${
                open ? "transform rotate-180" : ""
              }`}
            >
              <i className="fas fa-chevron-up"></i>
            </Disclosure.Button>
            <button className="text-rose-700 text-lg" onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="py-4">
            <DropdownPasswordType
              passwordType={passwordType}
              handlePasswordTypeChange={handlePasswordTypeChange}
            />
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <div className="my-4">
                  <label className="block mb-2 text-md font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="my-4">
                  <label className="block mb-2 text-md font-medium text-gray-900">
                    Message
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <input
                      className="border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                      value={message}
                      onChange={handleMessageChange}
                    />
                    <div className="absolute inset-y-0 right-5 flex items-center">
                      <EmojiPicker />
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default EditCard;
