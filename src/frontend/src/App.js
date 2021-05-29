import React, { useEffect, useState } from 'react';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const API = 'http://localhost:8000';

      const response = await fetch(API, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const getNews = await response.json();

      getNews
        .filter((article) => article.channel !== 'Announcements')
        .forEach((element) => {
          setNews((oldNews) => [...oldNews, element]);
        });
    };

    getNews();
  }, []);

  const renderNews = () => {
    return (
      <>
        {news.map((article) => (
          <p key={article.id}>{article.text}</p>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Here's the news, Sailor</h1>
      {renderNews()}
    </>
  );
};

export default App;
