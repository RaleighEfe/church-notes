import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Layout>
      <h3 className="mb-4 text-2xl sm:text-3xl">About Us</h3>
      <p className="text-lg">
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
      <div className=" my-10 grid justify-center items-center">
        <Link
          href="/nopage/"
          className="bg-[#4f7942] px-10 py-2 text-white inline-flex items-center justify-center rounded-lg text-lg"
        >
          Explore Book Closet
        </Link>
      </div>
    </Layout>
  );
};

export default AboutUs;
