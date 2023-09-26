import UserHeader from "@/components/molecules/UserHeader";
import Layout from "@/components/atoms/Layout";
import SearchBar from "@/components/atoms/SearchBar";
import Link from "next/link";
import Image from "next/image";
import { ImBooks } from "react-icons/im";
import CropText from "@/components/atoms/CropText";
const Dashboard = () => {
  const schema = [
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/loginImage.avif",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
  ];
  return (
    <div>
      <UserHeader />
      <div className="grid md:grid-cols-2 gap-3 px-5 py-3 shadow-md">
        <h4 className="grid content-center text-lg">Hello, user!</h4>
        <div className="grid grid-cols-[auto_1fr] justify-end gap-3">
          <select
            name="sortBy"
            className="block w-full appearance-none p-2 bg-white/70 border-2 focus-within:border-red-400 rounded-md"
          >
            {/* <optgroup label="Book Type"> */}
            <option selected disabled>
              Sort By
            </option>
            <option value="ebook">Title</option>
            <option value="ebook">Author</option>
            <option value="audio">Recent Reads</option>
            <option value="audio">Recently Added</option>
            {/* </optgroup> */}
          </select>
          <SearchBar />
        </div>
      </div>
      {/* <Layout> */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
          {schema.map((data, i) => (
            <Link key={i} href="/books/1">
              <div className="grid grid-rows-[1fr_0.5fr_auto] h-auto max-w-full rounded-lg border border-[#48494B]">
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
      {/* </Layout> */}
    </div>
  );
};

export default Dashboard;
