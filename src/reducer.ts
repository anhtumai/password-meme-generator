import {
  PasswordBlockInfo,
  DispatchAction,
  DispatchType,
  PasswordType,
} from "types";

export const initialPasswordBlockInfos: PasswordBlockInfo[] = [
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

export function passwordBlockInfosReducer(
  state: PasswordBlockInfo[],
  action: DispatchAction,
) {
  switch (action.type) {
    case DispatchType.UPDATE: {
      const { index, updatedItem } = action;
      const updatedState = state.map((passwordBlockInfo, i) =>
        i === index ? updatedItem : passwordBlockInfo,
      );
      return updatedState;
    }
    case DispatchType.ADD: {
      const newPasswordBlockInfo: PasswordBlockInfo = {
        passwordType: PasswordType.STRONG,
        password: "Sample strong password",
        message: "Strong",
      };
      return [...state, newPasswordBlockInfo];
    }
    case DispatchType.DELETE: {
      const { index } = action;
      return state.filter((_, i) => i !== index);
    }
    case DispatchType.RESET: {
      return initialPasswordBlockInfos;
    }
  }
}
