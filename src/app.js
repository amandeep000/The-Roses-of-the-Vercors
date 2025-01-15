// import OpenAI from "openai";
// const apiKey =
//   "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";

// const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: "write a haiku about ai" }],
// });
// completion.then((result) => console.log(result.choices[0].message));
// new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
import { GoogleGenerativeAI } from "@google/generative-ai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDr6sRZfiaUMUU0pPUuYhSkgVfurR29nEI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";
const input = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputPrompt = input.value;
  const prompt = inputPrompt;
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  const divEl = document.createElement("div");
  divEl.textContent = result.response.text();
  const body = document.querySelector("body");
  body.appendChild(divEl);
});
