import React, { useEffect, useState } from 'react';
// require('dotenv').config();

const GoogleNews = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_NEWS_API_KEY;
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-17&sortBy=publishedAt&apiKey=${apiKey}`; // Updated API URL

  useEffect(() => {
    console.log('API Key:', apiKey); // Log the API key
    fetch(apiUrl)
      .then(response => {
        console.log('Response:', response); // Log the response
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the data
        if (data.articles && data.articles.length > 0) {
          console.log('Articles available:', data.articles); // Log the articles
          setArticles(data.articles); // Adjust based on your API response structure
        } else {
          console.log('No articles available.');
          setArticles([]); // Reset articles state if response is empty
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setArticles([]); // Reset articles state on error
      });
  }, [apiUrl]);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-sans bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Tesla News</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Stay updated with the latest news from Tesla.
      </p>
      {articles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 mb-2">No articles available.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt={article.title} />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{article.description}</p>
              </a>
              <p className="text-gray-600 dark:text-gray-300">Published at: {new Date(article.publishedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleNews;
