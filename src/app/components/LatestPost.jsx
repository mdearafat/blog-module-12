import getLatestPosts from "../../../api/getLatestPosts";
export default async function LatestPosts() {
  const allPosts = await getLatestPosts();
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md p-4 rounded-lg">
            <img src={blog.img} alt={blog.title} className="mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-2 text-black">
              {blog.title}
            </h2>
            <p className="text-gray-600">{blog.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
