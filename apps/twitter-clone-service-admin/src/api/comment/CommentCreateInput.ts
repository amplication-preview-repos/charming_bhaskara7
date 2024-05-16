import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
