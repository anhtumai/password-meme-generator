import { Disclosure, Transition } from "@headlessui/react";
import { Dispatch } from "react";
import { PasswordBlockInfo, DispatchAction } from "types";

import DropdownPasswordType from "./DropdownPasswordType";

function EditCard({
  passwordBlockInfo,
  dispatchFunction,
  index,
}: {
  passwordBlockInfo: PasswordBlockInfo;
  dispatchFunction: Dispatch<DispatchAction>;
  index: number;
}) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div className="flex flex-col bg-white shadow-lg rounded-lg border-2 border-gray-400 my-4 px-6">
          <div className="flex py-4">
            <div className="grow bg-gray-100 text-gray-700 text-md pt-1">
              Edit card
            </div>
            <Disclosure.Button
              className={`mr-12 text-blue-700 text-lg ${
                open ? "transform rotate-180" : ""
              }`}
            >
              <i className="fas fa-chevron-up"></i>
            </Disclosure.Button>
            <button className="text-rose-700 text-lg">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="py-4">
            <DropdownPasswordType />
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
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    value={passwordBlockInfo.password}
                  />
                </div>
                <div className="my-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 block w-full p-2.5"
                    value={passwordBlockInfo.message}
                  />
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
