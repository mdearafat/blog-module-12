import axios from "axios";
export default async function getLatestPosts() {
  const res = await axios.get(
    "https://basic-blog.teamrabbil.com/api/post-newest"
  );
  if (!res.status === 200) {
    return console.log("Eroor");
  }
  return res.data;
}
