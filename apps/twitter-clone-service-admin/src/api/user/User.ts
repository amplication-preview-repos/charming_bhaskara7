import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profilePicture: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string | null;
};
