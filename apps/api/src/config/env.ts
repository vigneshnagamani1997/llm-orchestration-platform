import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT || 4000),

  mongoUri:
    process.env.MONGO_URI || "",

  githubToken:
    process.env.GITHUB_TOKEN || "",

  ollamaUrl:
    process.env.OLLAMA_BASE_URL ||
    "http://localhost:11434"
};