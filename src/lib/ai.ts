// Mock implementation of AI services for Furniture SaaS
export const AIService = {
  // Optimizes routes for deliveries
  optimizeRoute: async (deliveries: any[]) => {
    // Artificial delay to simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Sort by priority score (descending) as a simple optimization logic
    return [...deliveries].sort((a, b) => (b.ai_priority_score || 0) - (a.ai_priority_score || 0));
  },

  // Predicts demand for inventory management
  predictDemand: async (products: any[]) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return products.map(p => ({
      ...p,
      predicted_demand: Math.floor(Math.random() * 50) + 10,
      confidence_score: Math.floor(Math.random() * 20) + 75
    }));
  }
};
