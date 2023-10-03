function SideNew({title, description}) {
  return (
    <div className="text-white my-6 md:mt-8">
      <a href="#" className="text-xl md:text-lg font-semibold mb-2 hover:text-softOrange">{title}</a>
      <p className=" text-grayishBlue md:text-[14px]">{description}</p>
    </div>
  )
}

export default SideNew;