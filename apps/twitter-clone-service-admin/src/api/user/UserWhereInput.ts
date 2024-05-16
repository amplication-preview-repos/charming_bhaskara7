import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  tweets?: TweetListRelationFilter;
  username?: StringNullableFilter;
};
