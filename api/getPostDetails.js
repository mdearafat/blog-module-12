import axios from "axios";
export default async function getPostDetails(id) {
  const res = await axios.get(
    "https://basic-blog.teamrabbil.com/api/post-details/" + id
  );
  if (!res.status === 200) {
    return console.log("Eroor");
  }
  return res.data;
}
