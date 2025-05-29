import OpenAI from "OpenAI";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const runTest = async () => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Say hello in a funny way."}]
        });

        console.log("API Call Successful!");
        console.log("Response: \n", response.choices[0].message.content);
    } catch (error) {
        console.error("API Call Failed:");
        console.error(error);
    }

};

runTest();

