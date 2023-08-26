import axios from "axios";
export default async function getAllPosts(num) {
  const res = await axios.get(
    "https://basic-blog.teamrabbil.com/api/post-list/" + num
  );
  if (!res.status === 200) {
    return console.log("Eroor");
  }
  return res.data;
}
