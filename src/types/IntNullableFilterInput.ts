import { Nullable } from '@refetched/core-types';

export type IntNullableFilterInput = {
  equals?: Nullable<number>;
  gt?: Nullable<number>;
  gte?: Nullable<number>;
  in?: Nullable<number[]>;
  lt?: Nullable<number>;
  lte?: Nullable<number>;
};
