import { Keys, Nullable } from '@refetched/core-types';
import { SortOrder } from '.';

export type OrderByInput<T extends object> = {
  [K in Keys<T>]?: Nullable<SortOrder>;
};
