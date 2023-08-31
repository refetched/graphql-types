import { Nullable } from '@refetched/core-types';

export type DateTimeNullableFilterInput = {
  equals?: Nullable<Date>;
  gt?: Nullable<Date>;
  gte?: Nullable<Date>;
  in?: Nullable<Date[]>;
  lt?: Nullable<Date>;
  lte?: Nullable<Date>;
};
