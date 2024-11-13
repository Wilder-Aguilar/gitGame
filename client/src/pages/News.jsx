import { React, useEffect, useState } from 'react';
import image from '../assets/images/image.png';
import MainCard from '../components/MainCard';
import { getAllNews } from '../services/newServices';

const GameNews = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    const dataNews = await getAllNews();
    if (Array.isArray(dataNews)) {
      const formattedNews = dataNews.map(item => {

        const formattedDateTime = new Date(item.published_at).toISOString();
        const imageUrl = `http://localhost:3000${item.image_url}`;

        return {
          ...item,
          image_url: imageUrl,
          published_at: formattedDateTime,
        };
      });

      // Ordena las noticias de forma descendente (última noticia primero)
      formattedNews.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

      setNews(formattedNews);
    } else {
      console.error('La respuesta no es un array:', dataNews);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div div className="w-full min-h-screen flex flex-col items-center bg-dark">
      <h1 className='font-title md:mt-32 mt-20 drop-shadow-lg md:text-6xl text-2xl font-bold text-light z-10'>NOTICIAS</h1>
      <div className="w-full">
        <img
          src={image}
          alt="fondo verde"
          className="absolute top-0 w-full"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2 w-5/6 mt-20 mb-2">
        {Array.isArray(news) && news.length > 0 ? (
          news.map((item) => (
            <MainCard
              key={item.id}
              id={item.id}
              title={item.title}
              news={item.news}
              image_url={item.image_url}
              date={new Date(item.published_at).toLocaleDateString()}
              numLikes={item.num_likes}
            />
          ))
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>

    </div>
  )
}

export default GameNews
