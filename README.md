# Summify

Summify is a web application that simplifies the process of summarizing articles by employing advanced natural language processing algorithms to extract key points.

## Features
- Paste any article URL and receive a concise 3-sentence summary, highlighting the main ideas.
- Utilizes cutting-edge extractive text summarization to identify the most salient sentences.
- Developed using React, Redux Toolkit, TailwindCSS, and RapidAPI.
- Responsive design ensures compatibility with all devices.

## Demo
 https://summify-article.netlify.app/

## Usage
To summarize an article using Summify, follow these simple steps:

1. Paste the full article URL into the input field.
2. Click the "Summarize" button or press Enter.
3. Instantly receive a 3-sentence summary below.

Users can continuously summarize multiple articles to quickly skim through the key details.

**Note:** Summify supports articles from any source or domain, as long as the full URL is provided.

## Summarization API
Summify's summarization capability is powered by the state-of-the-art NLP API from RapidAPI known as the Article Extractor and Summarizer. This API employs extractive summarization techniques to identify the most important sentences in the article.

Additionally, the API response includes extracted meta-data such as the article title, date, author, keywords, and more.

## Tech Stack
- **Frontend:** React, Redux Toolkit, TailwindCSS
- **Backend API:** RapidAPI Article Extractor and Summarizer
- **State Management:** Redux Toolkit + RTK Query
- **Styling:** Tailwind CSS
- **Build Tools:** Vite

## Installation
To run Summify locally, follow these installation steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/user/summify


2. Navigate to the project directory:

    ```sh
       cd summify

3. Install dependencies:
   ```sh
     npm install
 
4. Start the development server:

   ```sh
   npm run dev


## Contributing
Contributions to Summify are welcomed! If you encounter any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.