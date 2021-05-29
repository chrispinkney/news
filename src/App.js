import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const getNews = async () => {
      const API = 'https://librenews.io/api';

      const response = await fetch(API, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://librenews.io',
          'Content-Type': 'application/json',
        },
      });

      const news = await response.json();
      console.log(news);

      return news;
    };
    getNews();
  }, []);

  return (
    <>
      <p>hello world</p>
    </>
  );
};

export default App;
