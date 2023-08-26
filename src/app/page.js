import Link from "next/link";
import LatestPost from "./components/LatestPost";
import Contact from "./components/Contact";
const Home = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
              Connect to the world
              <strong className="font-extrabold text-blue-700 sm:block ">
                Anytime, Anywhere
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center">
              <Link
                href="blogs/"
                className="block w-full rounded bg-blue-600 px-12 py-3  font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto capitalize"
              >
                See latest news
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LatestPost />
      <Contact />
    </>
  );
};

export default Home;
