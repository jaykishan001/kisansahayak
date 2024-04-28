import React from "react";

function Home() {
  const imageUrl = "https://unsplash.com/photos/indian-farmer-talking-mobile-phone-at-agriculture-field-nMXewdzw8Ys"
  return (
    <div 
      className="h-screen w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  )
}
export default Home;
