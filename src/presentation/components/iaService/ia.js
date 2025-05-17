import Groq from "groq-sdk";

const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function getAiResponse( prompt, message ) {
  const chatCompletion = await getGroqChatCompletion( prompt, message );
  return chatCompletion.choices[0]?.message?.content || ""
}


export async function getGroqChatCompletion( prompt, message="") {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt + message,
      },
    ],
    model: "llama3-70b-8192",
});
}
