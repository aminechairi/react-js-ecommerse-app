import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import './categories.css';
import CategoryCard from '../categoryCard/categoryCard';
import CategoryCardSkeletion from '../categoryCardSkeleton/categoryCardSkeleton';
import { fetchCategories } from '../../Redux/categories/categoriesSlice';

const Categories = () => {
  // handle slidesPerView
  const [windowWidth, setWindowWidth] = useState(1);
  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 340) {
        setWindowWidth(2.5);
      };
      if (windowWidth > 340) {
        setWindowWidth(4.5);
      };      
      if (windowWidth > 500) {
        setWindowWidth(6.5);
      };
      if (windowWidth > 768) {
        setWindowWidth(8.5);
      };
      if (windowWidth > 1200) {
        setWindowWidth(10.5);
      };
    };
    handleResize();

    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='categories'>
      <div className='container'>
        <div className='ab'>
          <h1 className='title'>
            categories
          </h1>
        <Swiper 
            navigation={true}
            slidesPerView={windowWidth}
            spaceBetween={15}
            modules={[Navigation]}
            className="categories_swiper"
          >
            {
              categories.status === 'idle' ||  categories.status === 'loading' ?
                Array.from('js'.repeat(12)).map((item, i) => {
                  return (
                    <SwiperSlide key={i + 1}>
                      <CategoryCardSkeletion />
                    </SwiperSlide>
                  );
                })
              : categories.status === 'succeeded' ?
                categories.data.data.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <CategoryCard name={item.name} img={item.image} />
                    </SwiperSlide>
                  );
                })
              : categories.status === 'failed' ?
                null
              : null
            }
        </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Categories;