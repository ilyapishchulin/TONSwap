import { TAction } from 'store/TAction';
import { TGraph } from 'types/TGraph';

export const GRAPH_SET = 'graph/set';

export const setGraph = (graph: TGraph[]): TAction<typeof GRAPH_SET, TGraph[]> => ({
  type: GRAPH_SET,
  data: graph,
});
