import { PasswordBlockInfo, DispatchAction, DispatchType } from "types";

export function passwordBlockInfosReducer(
  state: PasswordBlockInfo[],
  action: DispatchAction,
) {
  switch (action.type) {
    case DispatchType.UPDATE: {
      return state;
    }
    case DispatchType.ADD: {
      return state;
    }
    case DispatchType.DELETE: {
      return state;
    }
  }
}
