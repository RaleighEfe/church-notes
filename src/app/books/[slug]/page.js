import Buttons from "@/components/atoms/Buttons";
import Header from "@/components/molecules/Header";

const SingleBook = () => {
  return (
    <div>
      <Header />
      <div className="p-3">
        <div className="flex gap-5 md:gap-20 items-center md:m-5">
          <div className="h-48 w-32 bg-slate-500 rounded-lg"></div>
          <div className="content-center">
            <h3 className=" text-2xl font-semibold pb-3 md:text-3xl">
              Book title
            </h3>

            <div className="flex gap-3 text-xs md:text-lg">
              <Buttons type="outline" href="/nopage/">
                Audiobook
              </Buttons>
              <Buttons type="filled" href="/nopage/">
                Ebook
              </Buttons>
            </div>
            <p className="text-[#48494B] mt-2">Genre</p>
          </div>
        </div>

        <p className="my-5 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid
          sequi labore exercitationem voluptas, incidunt vel earum nesciunt quis
          ex porro assumenda laudantium maiores praesentium dolores eius quo
          officiis ducimus fugit, quidem minus sit! Asperiores, corporispariatur
          ducimus provident dolore. Cumque porros reiciendis eum beatae facilis
          nobis! Autem, ipsa ducimus. ex porro assumenda laudantium maiores
          praesentium dolores eius quo officiis ducimus fugit, quidem minus sit!
          Asperiores, corporis reiciendis pariatur ducimus provident dolore.
          Cumque porro eum beatae facilis nobis! Autem, ipsa ducimus.
        </p>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold pb-3">Comments</h3>
        </div>
      </div>
    </div>
  );
};
export default SingleBook;
