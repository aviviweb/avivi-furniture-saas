import { supabase } from "./supabase";

/**
 * Service to handle AI Customer Support interactions
 */
export const CustomerSupportService = {
  /**
   * Processes an incoming message from a customer and returns an AI response.
   * In a real app, this would use a RAG (Retrieval-Augmented Generation) system 
   * to check the order status in Supabase before answering.
   */
  async getAIResponse(customerId: string, message: string, organizationId: string) {
    console.log(`AI Support processing message for customer ${customerId}: ${message}`);
    
    // Simulate order lookup
    // const { data: order } = await supabase.from('deliveries').select('*').eq('customer_phone', customerId).single();
    
    // Simulate AI logic based on message content
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes("איפה") || lowerMsg.includes("סטטוס") || lowerMsg.includes("משלוח")) {
      return {
        reply: "היי! בדקתי במערכת, וההזמנה שלך (ספת עור 3 מושבים) נמצאת כרגע בדרכה אליך עם המוביל אבי. זמן הגעה משוער: עוד כ-20 דקות. תרצה שאשלח לך קישור למעקב חי?",
        action: "track_order"
      };
    }
    
    if (lowerMsg.includes("הרכבה") || lowerMsg.includes("איך להרכיב")) {
      return {
        reply: "בשמחה! שלחתי לך עכשיו סרטון קצר ומדריך PDF שמסבירים שלב אחר שלב איך להרכיב את שולחן האוכל שלך. אם תסתבך, אני יכול לחבר אותך למרכיב שלנו שיעזור לך בווידאו.",
        action: "send_guide"
      };
    }

    return {
      reply: "היי, אני העוזר החכם של החנות. במה אוכל לעזור לך היום? אני יכול לעזור במעקב אחר הזמנה, מדריכי הרכבה או תיאום מועד משלוח חדש.",
      action: "general_help"
    };
  }
};
