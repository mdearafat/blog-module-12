import getAllPosts from "../../../api/getAllPosts";
import Link from "next/link";
const Blogs = async () => {
  const allPosts = [];

  for (let i = 1; i <= 9; i++) {
    const posts = await getAllPosts(i);
    allPosts.push(...posts);
  }

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((blog) => (
          <Link href={`/blogs/${blog.id}`}>
            <div key={blog.id} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={blog.img}
                alt={blog.title}
                className="mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2 text-black">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
