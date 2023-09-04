import { Keys, Nullable } from '@refetched/core-types';

export type WhereInput<T extends object> = { [K in Keys<T>]?: Nullable<unknown> } & {
  and?: Nullable<WhereInput<T>[]>;
  or?: Nullable<WhereInput<T>[]>;
  not?: Nullable<WhereInput<T>[]>;
};
