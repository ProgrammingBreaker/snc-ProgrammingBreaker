import { User } from "@/utils/common/person";
import Image from "next/image";
import React, { FunctionComponent } from "react";

export const Card: FunctionComponent<User> = ({
  backgroundImageUrl,
  profilePictureUrl,
  name,
  title,
  followers,
  following,
}) => {
  return (
    <div
      className="w-auto relative bg-no-repeat bg-cover h-auto z-0 rounded-xl overflow-hidden m-4 shadow-lg"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col p-6 gap-2 text-white">
        <Image
          src={profilePictureUrl}
          width={128}
          height={128}
          className="rounded-full border-white border-2 object-cover w-32 h-32"
          alt={name}
        />
        <h2 className="text-2xl font-bold">{title}</h2>
        <h6 className="text-xl font-semibold">{name}</h6>
        <div className="flex flex-row justify-between items-center gap-4">
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
        </div>
      </div>
    </div>
  );
};
