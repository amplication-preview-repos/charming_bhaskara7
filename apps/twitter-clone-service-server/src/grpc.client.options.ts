import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "tweet", "follower", "comment", "like"],
    protoPath: [
      "src/user/user.proto",
      "src/tweet/tweet.proto",
      "src/follower/follower.proto",
      "src/comment/comment.proto",
      "src/like/like.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
