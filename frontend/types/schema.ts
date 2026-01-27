export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  kycStatus: "pending" | "verified" | "rejected" | "none";
  profileImage?: string;
}

export interface Account {
  id: string;
  userId: string;
  currency: "USD" | "EUR" | "GBP" | "JPY" | "BTC" | "ETH";
  balance: number;
  accountType: "checking" | "savings" | "investment" | "crypto";
  cardNumber?: string;
  cardExpiry?: string;
  cardType?: "visa" | "mastercard";
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: "credit" | "debit";
  status: "completed" | "pending" | "failed";
  merchantName: string;
  merchantLogo?: string;
  category:
    | "food"
    | "travel"
    | "tech"
    | "shopping"
    | "transfer"
    | "utility"
    | "salary"
    | "other";
  timestamp: string; // ISO date string
}

export interface CurrencyRate {
  pair: string; // e.g., 'USD-EUR'
  rate: number;
  lastUpdated: string; // ISO date string
  slippage?: number;
}

export interface DashboardData {
  user: User;
  accounts: Account[];
  recentTransactions: Transaction[];
  rates: CurrencyRate[];
}
