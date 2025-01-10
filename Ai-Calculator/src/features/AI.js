const {
    GoogleGenerativeAI,
    
  } = require("@google/generative-ai");
  
  // Access your API key from environment variable
  const API_KEY = process.env.GEMINI_API_KEY;
  
  // Initialize the model
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = "You are a mathematician who has an IQ like einstein, make an explanation based on the outputted equation.";
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
  }
  
  run();