import Head from 'next/head';

const ShootingStars = () => {
  return (
    <div >
      <Head>
        <title>Shooting Stars Animation</title>
      </Head>
      <div className="top-0 w-full flex flex-col justify-center items-center text-red-500 dark:text-black overflow-hidden
    md:text-blue-500 lg:text-green-500 
    md:flex-row lg:flex-row 
    md:justify-between lg:justify-around">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default ShootingStars;
