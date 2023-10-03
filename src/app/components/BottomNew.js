import Image from "next/image";

function BottomNew({ index, title, description, image }) {
  return (
    <div className="flex items-center justify-start text-left my-3">
      <div className="min-w-[120px] min-h-[150px] md:min-w-[90px] md:min-h-[120px]">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className="flex flex-col justify-start items-start align-middle gap-3 md:gap-2 h-[150px] md:max-h-[120px] md:max-w-[210px] md:mx-5">
        <span className=" text-3xl text-grayishBlue font-semibold">{index}</span>
        <a href="#" className="text-lg md:text-[17px] font-extrabold text-veryDarkBlue hover:text-softRed">{title}</a>
        <p className="text-[15px] md:text-[14px] text-darkGrayishBlue">{description}</p>
      </div>
    </div>
  )
}

export default BottomNew;