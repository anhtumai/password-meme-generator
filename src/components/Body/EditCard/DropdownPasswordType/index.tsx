import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";

import { PasswordType } from "types";

const passwordTypeToStyle = {
  Weak: "bg-rose-600 hover:bg-rose-700",
  Medium: "bg-orange-600 hover:bg-orange-700",
  Strong: "bg-green-600 hover:bg-green-700",
};

function DropdownPasswordType({
  passwordType,
  handlePasswordTypeChange,
}: {
  passwordType: PasswordType;
  handlePasswordTypeChange: (x: PasswordType) => void;
}) {
  const otherPasswordTypes = [
    PasswordType.WEAK,
    PasswordType.MEDIUM,
    PasswordType.STRONG,
  ].filter((type) => type !== passwordType);

  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button
                className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out border 300 rounded-md focus:outline-none text-white ${passwordTypeToStyle[passwordType]}`}
              >
                <span>Type: {passwordType}</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute left-0 w-40 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() =>
                          handlePasswordTypeChange(otherPasswordTypes[0])
                        }
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        {otherPasswordTypes[0]}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() =>
                          handlePasswordTypeChange(otherPasswordTypes[1])
                        }
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        {otherPasswordTypes[1]}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

export default DropdownPasswordType;
