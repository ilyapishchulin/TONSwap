export type TUser = {
  name: string;
  walletId: string;
  balance: Record<string, number>; // Record<TICKER_NAME, count>;
}