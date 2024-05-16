import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string | null;
};
