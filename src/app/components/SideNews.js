import SideNew from "./SideNew";
import sideNews from "../../../public/data/side-news.json";

let sideNewsSize = sideNews.length;

function SideNews() {
  return (
    <div className="bg-veryDarkBlue p-6 mt-16 my:8 md:mt-0 md:w-full">
      <h1 className="text-3xl font-semibold my-2 text-softOrange">New</h1>
      {sideNews.map((item, index) => {
        if (index >= 0) {
          sideNewsSize--
        }

        return (
          <div key={index}>
            <SideNew
              title={item.title}
              description={item.description}
            />
            {sideNewsSize > 0 ? <hr className=" border-grayishBlue opacity-40" /> : ""}
          </div>
        )

      })}
    </div>
  )
}

export default SideNews;