import React, { useState, useEffect } from 'react';
import cardData from './cardData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Articles = () => {
  const [pageSize, setPageSize] = useState(3); // Initial pageSize
  const totalSets = Math.ceil(cardData.length / pageSize);

  const [currentSet, setCurrentSet] = useState(1);
  const [displayedCards, setDisplayedCards] = useState(cardData.slice(0, pageSize));

  const showNextCards = () => {
    const startIndex = currentSet * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex < cardData.length) {
      setDisplayedCards(cardData.slice(startIndex, endIndex));
      setCurrentSet(currentSet + 1);
    }
  };

  const showPreviousCards = () => {
    const startIndex = Math.max((currentSet - 2) * pageSize, 0);
    const endIndex = startIndex + pageSize;
    if (startIndex >= 0) {
      setDisplayedCards(cardData.slice(startIndex, endIndex));
      setCurrentSet(currentSet - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
     
      const newPageSize = window.innerWidth <= 768 ? 6 : 3;

      // Update pageSize and reset currentSet when switching between sizes
      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
        setCurrentSet(1);
        setDisplayedCards(cardData.slice(0, newPageSize));
      }
    };

    // event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  return (
    <div className='flex flex-col mx-auto space-y-4  lg:w-[1440px] lg:h-[679px]  ml-4 md:ml-8 lg:ml-24 mt-4'>
    <div className='w-full h-auto space-y-4 lg:space-y-10 mr-4 md:mr-8 lg:mr-0'>
      <div>
        <h3 className='text-[#0E2368] text-2xl font-semibold '>Latest Articles</h3>
      </div>

      {/* cards */}
      <div className='lg:flex'>
        <div className={` ${pageSize === 6 ? 'grid grid-cols-2 gap-3 mb-12 mr-8 mt-4' : 'flex flex-row gap-[20px] mr-32'}`}>
        {displayedCards.map((card, index) => (
  <div
    key={card.id}
    className={`border border-[#93A2D3] bg-white p-4 rounded-lg space-y-4 ${
      index % 2 === 1 ? 'lg:mt-6' : ''
    } ${pageSize === 3 ? 'lg:w-[400px]' : 'lg:w-[300px] '}`} 
  >
    <img src={card.imageUrl} alt={`Card Image ${card.id}`} className='w-full h-auto rounded-md' />
    <h3 className='text-[#0E2368] font-semibold text-xl'>{card.title}</h3>
    <p className='text-gray-600'>{card.content}</p>
    <button className='bg-white rounded-full text-[#424961] px-2 py-1 border border-[#424961]'>
      Read More
    </button>
      </div>
         ))}
        </div>
      </div>
    </div>

     {/* buttons - Render on larger screens */}
     {pageSize === 3 && (
        <div className='hidden lg:flex justify-center items-center space-y-2 lg:space-y-0 lg:space-x-1 mt-2 lg:mr-52'>
          <button
            className={`rounded-full px-2 py-1 relative ${currentSet === 1 ? 'text-black' : 'text-[#424961]'} mb-2 lg:mb-0 lg:mr-2`}
            onClick={showPreviousCards}
            disabled={currentSet === 1}
          >
            <IoIosArrowBack className='text-xl' />
            <div className='absolute inset-0 border border-[#424961]'></div>
          </button>

          <div className={`text-${currentSet === 1 ? 'black' : '[#424961]'} lg:mt- lg:mr-2`}>
            {currentSet}/
            {totalSets}
          </div>

          <button
            className={`rounded-full px-2 py-1 relative ${currentSet === totalSets ? 'text-black' : 'text-[#424961]'} mt-2 lg:mt-0 lg:ml-2`}
            onClick={showNextCards}
            disabled={currentSet === totalSets}
          >
            <IoIosArrowForward className='text-xl' />
            <div className='absolute inset-0 border border-[#424961]'></div>
          </button>
        </div>
      )}
  </div>
  );
};
