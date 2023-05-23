import Link from "next/link";
import CropText from "../CropText";


const Cards = () => {
  const schema = [
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {schema.map((data, i) => (
        <div key={i}>
          <Link href="">
            <div className="grid grid-rows-2 relative border border-[#374141] rounded-md shadow-lg h-48">
              <div className="">{data.image}</div>
              <div className="grid grid-rows-[1fr_auto_1fr] items-end p-2 h-16">
                <div className="flex text-xs">
                  <div>icon</div>
                  <p className="font-light">{data.type}</p>
                </div>
                <h4 className="font-semibold text-sm">
                  <CropText text={data.title} />
                </h4>
                <p className="text-xs">{data.author}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
