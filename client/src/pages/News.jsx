import { React, useEffect, useState } from 'react';
import image from '../assets/images/image.png';
import MainCard from '../components/MainCard';
import { getAllNews } from '../services/gitGameServices';

const GameNews = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    const dataNews = await getAllNews();
    setNews(dataNews);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div div className="w-full min-h-screen flex flex-col items-center bg-dark">
      <div className="w-full">
        <img
          src={image}
          alt="fondo verde"
          className="absolute w-full"
        />
      </div>

      <div className="grid sm:grid-cols-1 w-5/6 mt-24">
        <MainCard />
      </div>

    </div>
  )
}

export default GameNews
