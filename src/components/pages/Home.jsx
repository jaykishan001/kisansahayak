import React from "react";

function Home() {
  const imageUrl =
    "https://i.pinimg.com/564x/18/76/1c/18761c391a270680761fee93d0079629.jpg";
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center absolute"
      style={{ backgroundImage: `url(${imageUrl})` }}  
    >
      <h1 className="font-bold text-[9vh] pt-[22vh] ml-[18vh] absolute">Welcome to kisan Sahayak</h1>
    </div>
  );
}
export default Home;
