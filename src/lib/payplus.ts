// Mock implementation of PayPlus integration
export const PayPlusService = {
  createPaymentLink: async (amount: number, currency: string = 'ILS', customerDetails: any) => {
    console.log(`[PayPlus Mock] Creating payment link for ${amount} ${currency}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      payment_url: `https://payplus.co.il/mock-payment/${Math.random().toString(36).substr(2, 9)}`,
      transaction_id: `tx_${Date.now()}`
    };
  }
};
