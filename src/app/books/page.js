"use client";
import Link from "next/link";
import { ImBooks } from "react-icons/im";
import CropText from "../../components/atoms/CropText";
import Header from "@/components/molecules/Header";
import Image from "next/image";
import Footer from "@/components/molecules/Footer";

// const GetAllBooks = async () => {
//   const res = await fetch(
//     "https://api.nytimes.com/svc/books/v3/lists/full-overview.json"
//   );

//   return res.json();
// };
const AllBooks = ({ image, type, title, author }) => {
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
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Packages for all your friends ",
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
      title: "Best mate times",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Andrea",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Dr smith house of curious things",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A mage's author",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Six of crows",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "All your perfect",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "The half of it",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Clockwork princess",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Percy jackson and the abominable four",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "The invincible life of addie larue",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Chasing Red",
      author: "Lorel Mines",
    },
  ];
  // const books = GetAllBooks();
  // console.log("books");
  return (
    <div>
      <Header />
      <div className="grid ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-y-3 p-3 justify-items-center">
          {schema.map((data, i) => (
            <Link key={i} href="/books/1">
              <div className="grid grid-rows-[1fr_0.5fr_auto] w-40 border border-[#48494B] rounded-md">
                <div className="relative h-40 w-full">
                  <Image src={data.image} alt={data.title} fill />
                </div>

                <div className="px-2 pt-2">
                  <div className="flex text-xs gap-1">
                    <ImBooks />
                    <p className="font-light">{data.type}</p>
                  </div>
                  <h4 className="font-semibold text-sm">
                    <CropText text={data.title} />
                  </h4>
                </div>

                <div className="self-start px-2">
                  <p className="text-xs">{data.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AllBooks;
