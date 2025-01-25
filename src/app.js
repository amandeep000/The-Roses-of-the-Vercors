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
// import { GoogleGenerativeAI } from "@google/generative-ai";
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyDr6sRZfiaUMUU0pPUuYhSkgVfurR29nEI");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // const prompt = "Explain how AI works";
// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#submit");
// submitBtn.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const inputPrompt = input.value;
//   const prompt = inputPrompt;
//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
//   const divEl = document.createElement("div");
//   divEl.textContent = result.response.text();
//   const body = document.querySelector("body");
//   body.appendChild(divEl);
// });

// practice

// const books = [
//   {
//     title: "Algorithms",
//     author: ["Robert Sedgewick", "Kevin Wayne"],
//     publisher: "Addison-Wesley Professional",
//     publicationDate: "2011-03-24",
//     edition: 4,
//     keywords: [
//       "computer science",
//       "programming",
//       "algorithms",
//       "data structures",
//       "java",
//       "math",
//       "software",
//       "engineering",
//     ],
//     pages: 976,
//     format: "hardcover",
//     ISBN: "9780321573513",
//     language: "English",
//     programmingLanguage: "Java",
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Structure and Interpretation of Computer Programs",
//     author: [
//       "Harold Abelson",
//       "Gerald Jay Sussman",
//       "Julie Sussman (Contributor)",
//     ],
//     publisher: "The MIT Press",
//     publicationDate: "2022-04-12",
//     edition: 2,
//     keywords: [
//       "computer science",
//       "programming",
//       "javascript",
//       "software",
//       "engineering",
//     ],
//     pages: 640,
//     format: "paperback",
//     ISBN: "9780262543231",
//     language: "English",
//     programmingLanguage: "JavaScript",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ["Randal E. Bryant", "David Richard O'Hallaron"],
//     publisher: "Prentice Hall",
//     publicationDate: "2002-01-01",
//     edition: 1,
//     keywords: [
//       "computer science",
//       "computer systems",
//       "programming",
//       "software",
//       "C",
//       "engineering",
//     ],
//     pages: 978,
//     format: "hardcover",
//     ISBN: "9780130340740",
//     language: "English",
//     programmingLanguage: "C",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Operating System Concepts",
//     author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
//     publisher: "John Wiley & Sons",
//     publicationDate: "2004-12-14",
//     edition: 10,
//     keywords: [
//       "computer science",
//       "operating systems",
//       "programming",
//       "software",
//       "C",
//       "Java",
//       "engineering",
//     ],
//     pages: 921,
//     format: "hardcover",
//     ISBN: "9780471694663",
//     language: "English",
//     programmingLanguage: "C, Java",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: "Engineering Mathematics",
//     author: ["K.A. Stroud", "Dexter J. Booth"],
//     publisher: "Palgrave",
//     publicationDate: "2007-01-01",
//     edition: 14,
//     keywords: ["mathematics", "engineering"],
//     pages: 1288,
//     format: "paperback",
//     ISBN: "9781403942463",
//     language: "English",
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "The Personal MBA: Master the Art of Business",
//     author: "Josh Kaufman",
//     publisher: "Portfolio",
//     publicationDate: "2010-12-30",
//     keywords: ["business"],
//     pages: 416,
//     format: "hardcover",
//     ISBN: "9781591843528",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: "Crafting Interpreters",
//     author: "Robert Nystrom",
//     publisher: "Genever Benning",
//     publicationDate: "2021-07-28",
//     keywords: [
//       "computer science",
//       "compilers",
//       "engineering",
//       "interpreters",
//       "software",
//       "engineering",
//     ],
//     pages: 865,
//     format: "paperback",
//     ISBN: "9780990582939",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: "Deep Work: Rules for Focused Success in a Distracted World",
//     author: "Cal Newport",
//     publisher: "Grand Central Publishing",
//     publicationDate: "2016-01-05",
//     edition: 1,
//     keywords: ["work", "focus", "personal development", "business"],
//     pages: 296,
//     format: "hardcover",
//     ISBN: "9781455586691",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];
