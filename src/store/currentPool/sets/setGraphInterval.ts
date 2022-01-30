import { TAction } from 'store/TAction';
import { EGraphIntervals } from 'enums/EGraphIntervals';

export const GRAPH_INTERVAL_SET = 'graphInterval/set';

export const setGraphInterval = (graphInterval: EGraphIntervals): TAction<typeof GRAPH_INTERVAL_SET, EGraphIntervals> => ({
  type: GRAPH_INTERVAL_SET,
  data: graphInterval,
});
