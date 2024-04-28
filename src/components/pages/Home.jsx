import React from "react";

function Home() {
  const imageUrl = "https://img.freepik.com/free-photo/man-standing-with-laptop-glade_23-2148154949.jpg?w=1800&t=st=1714284719~exp=1714285319~hmac=883bbcdcf7e09f555e94cd5cd115af70bd9c0bb4fdb9390d7b5b41cfb0d76184"
   return (
    <>
    <div 
      className="h-screen w-full bg-no-repeat bg-cover bg-center blur-[2px] absolute"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    </div>
      <h1 className="text-[10vh] text-center font-bold text-white pt-[34vh] absolute left-[300px]">Welcome to kisan Sahayak</h1>
    </>
  )
}
export default Home;
