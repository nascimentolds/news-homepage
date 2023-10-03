import news from "../../../public/data/bottom-news.json";
import BottomNew from "./BottomNew";

function BottomNews() {
  return (
    <div className="mt-16 md:mt-12 mb-10 md:flex">
      {news.map((item) => (
        <div key={item.index}>
          <BottomNew 
            index={item.index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        </div>
      ))}

      {/* <div className="flex items-center justify-start text-left">
        <div className="min-w-[120px] min-h-[150px]">
          <Image src={news[0].image} alt={news[0].title} width={100} height={100} />
        </div>
        <div className="flex flex-col justify-start">
          <span>{news[0].index}</span>
          <a href="#">{news[0].title}</a>
          <p>{news[0].description}</p>
        </div>
      </div>

      <div className="flex items-center justify-start text-left">
        <div className="min-w-[120px] min-h-[150px]">
          <Image src={news[1].image} alt={news[1].title} width={100} height={100} />
        </div>
        <div className="flex flex-col justify-start">
          <span>{news[1].index}</span>
          <a href="#">{news[1].title}</a>
          <p>{news[1].description}</p>
        </div>
      </div>

      <div className="flex items-center justify-start text-left">
        <div className="min-w-[120px] min-h-[150px]">
          <Image src={news[2].image} alt={news[2].title} width={100} height={100} />
        </div>
        <div className="flex flex-col justify-start">
          <span>{news[2].index}</span>
          <a href="#">{news[2].title}</a>
          <p>{news[2].description}</p>
        </div>
      </div> */}
    </div>
  )
}

export default BottomNews;