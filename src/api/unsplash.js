import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aiXnr_PLNqMnzwS-F3IM1W9vvCHKdxz1a2TmpbFhQkM",
  },
});
