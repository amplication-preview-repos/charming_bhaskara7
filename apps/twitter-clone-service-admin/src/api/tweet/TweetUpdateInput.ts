import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
