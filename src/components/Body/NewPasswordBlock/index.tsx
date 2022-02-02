import { PasswordType, PasswordBlockInfo } from "types";

const passwordTypeToTextColor = {
  [PasswordType.WEAK]: "text-rose-600",
  [PasswordType.MEDIUM]: "text-orange-600",
  [PasswordType.STRONG]: "text-green-600",
};

function NewPasswordBlock({
  passwordType,
  password,
  message,
}: PasswordBlockInfo) {
  const lineBackgroundColors =
    passwordType === PasswordType.WEAK
      ? ["bg-rose-600", "bg-gray-400", "bg-gray-400"]
      : passwordType === PasswordType.MEDIUM
      ? ["bg-orange-600", "bg-orange-600", "bg-gray-400"]
      : ["bg-green-600", "bg-green-600", "bg-green-600"];
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg my-4 px-6 py-4">
      <h3 className="text-lg decoration-gray-900 font-semibold">
        New Password
      </h3>
      <p className="my-6 bg-gray-50 border-solid border-2 border-gray-900 text-gray-900 text-md rounded-lg p-2.5 leading-8 align-middle">
        {password}
      </p>
      <div className="flex flex-row gap-2 mb-2 px-1">
        {lineBackgroundColors.map((bgColor, i) => (
          <div
            key={i}
            className={`flex-1 w-full h-2 ${bgColor} rounded-sm`}
          ></div>
        ))}
      </div>

      <h3
        className={`${passwordTypeToTextColor[passwordType]} text-lg font-semibold p-1`}
      >
        {message}
      </h3>
    </div>
  );
}

export default NewPasswordBlock;
