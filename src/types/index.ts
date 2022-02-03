export enum PasswordType {
  WEAK = "Weak",
  MEDIUM = "Medium",
  STRONG = "Strong",
}

export type PasswordBlockInfo = {
  passwordType: PasswordType;
  password: string;
  message: string;
};

export enum DispatchType {
  UPDATE,
  DELETE,
  ADD,
  RESET,
}

export type DispatchAction =
  | {
      type: DispatchType.UPDATE;
      index: number;
      updatedItem: PasswordBlockInfo;
    }
  | {
      type: DispatchType.ADD;
    }
  | {
      type: DispatchType.DELETE;
      index: number;
    }
  | {
      type: DispatchType.RESET;
    };
