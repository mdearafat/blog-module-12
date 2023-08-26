import getPostDetails from "../../../../api/getPostDetails";

const SingleBlog = async ({ params }) => {
  const id = params.id;
  const item = await getPostDetails(53);
  console.log(item);
  if (item) {
    return (
      <section className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-3">
          <img
            src={item.postDetails.img}
            className="w-[70%]"
            alt={item.postDetails.title}
          />
          <h1 className="text-black font-bold text-4xl py-5">
            {item.postDetails.title}
          </h1>
          <p className="text-black">{item.postDetails.content}</p>
        </div>
      </section>
    );
  }
};

export default SingleBlog;
