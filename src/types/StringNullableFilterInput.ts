import { Nullable } from '@refetched/core-types';
import { QueryMode } from './QueryMode';

export type StringNullableFilterInput = {
  contains?: Nullable<string>;
  endsWith?: Nullable<string>;
  equals?: Nullable<string>;
  gt?: Nullable<string>;
  gte?: Nullable<string>;
  in?: Nullable<string[]>;
  lt?: Nullable<string>;
  lte?: Nullable<string>;
  mode?: Nullable<QueryMode>;
  startsWith?: Nullable<string>;
};
