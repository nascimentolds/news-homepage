import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div className="flex flex-col md:w-[65%]">
      <HeroImage />
      <div className="md:flex md:mt-3">
        <h1 className=" text-4xl md:text-[50px] font-extrabold mt-4 w-[250px] md:w-[650px] text-veryDarkBlue leading-[45px]">The Bright Future of Web 3.0?</h1>
        <div className="mt-4 md:mr-4 md:w-[700px] md:ml-[60px]">
          <p className="text-[15px] md:text-[14px] mb-4 md:mb-8 text-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the power of 
          the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
          </p>
          <button className=" bg-softRed text-white py-3 px-6 uppercase text-xs tracking-[5px] font-semibold hover:bg-veryDarkBlue">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;