import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <h3 className="mb-4 text-2xl sm:text-3xl">About Us</h3>
      <p className="text-base sm:text-xl">
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
      <div className=" mt-10 grid justify-center items-center">
        <Buttons type="filled">Explore Church Notes</Buttons>
      </div>
    </Layout>
  );
};

export default AboutUs;
