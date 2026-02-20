// Enhanced Mock implementation of WhatsApp notifications via Twilio
export const WhatsAppService = {
  sendNotification: async (to: string, message: string) => {
    console.log(`[WhatsApp Mock] Sending to ${to}: ${message}`);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, messageId: `msg_${Math.random().toString(36).substr(2, 9)}` };
  },

  sendDeliveryUpdate: async (customerName: string, phone: string, status: string) => {
    const messages: Record<string, string> = {
      'scheduled': `שלום ${customerName}, המשלוח שלך מחברת אביבי רהיטים תואם בהצלחה.`,
      'in_transit': `היי ${customerName}, הנהג שלנו בדרך אליך! ניתן לעקוב כאן.`,
      'delivered': `שלום ${customerName}, תודה שקנית באביבי רהיטים. נשמח לדירוג השירות.`
    };
    
    return await WhatsAppService.sendNotification(phone, messages[status] || `עדכון משלוח: ${status}`);
  },

  sendSignatureConfirmation: async (customerName: string, phone: string, pdfUrl: string) => {
    const message = `שלום ${customerName}, תודה שאישרת את קבלת הרהיטים. הנה העתק חתום של תעודת המשלוח שלך: ${pdfUrl}`;
    return await WhatsAppService.sendNotification(phone, message);
  },

  sendRatingRequest: async (customerName: string, phone: string) => {
    const message = `היי ${customerName}, איך הייתה חווית הקניה וההרכבה שלך? נשמח אם תדרג אותנו כאן: https://avivi-systems.co.il/rate/123`;
    // Simulate a delay (this usually happens after delivery)
    return await WhatsAppService.sendNotification(phone, message);
  }
};
