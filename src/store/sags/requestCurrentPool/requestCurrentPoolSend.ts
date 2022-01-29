export const REQUEST_CURRENT_POOL_SEND = 'REQUEST_CURRENT_POOL_SEND';

export const requestCurrentPoolSend = (id: string) => ({
  type: REQUEST_CURRENT_POOL_SEND,
  data: id,
});
