import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
  user?: User | null;
};
