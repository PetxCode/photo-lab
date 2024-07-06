import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import { URL } from "@/utils/constant";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { revalidateTag } from "next/cache";
import cloudinary from "@/utils/cloudinary";

const page = async () => {
  const session: any = await getServerSession(options);
  const url = `${URL}/api/photo/${session?.user?.id}`;

  const file = await fetch(url, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["images"],
    },
  });

  const data = await file.json();

  const removeImage = async (formData: FormData) => {
    "use server";
    const photoID = formData.getAll("imageID");
    const str = photoID.toString().split(",");

    await fetch(`${url}/${str[0]}`, {
      method: "DELETE",
    });

    cloudinary.uploader.destroy(str[1]);

    revalidateTag("images");
  };

  return (
    <div className=" w-full">
      <div>
        Welcome back{" "}
        <strong className="italic font-semibold">{session?.user?.name}</strong>
      </div>

      <br />
      <br />
      <br />

      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {data.data.lab.map((props: any) => {
          return (
            <div
              key={props?._id}
              className="overflow-hidden border rounded-md h-[400px] w-full md:w-full"
            >
              <Image
                width={1000}
                height={1000}
                src={props?.imageURL}
                alt="image"
                className="w-full h-[80%] object-cover"
              />

              <div className="p-2">
                <p>{props?.name}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold mt-3 text-[12px]">
                    {moment(props?.createdAt).format("lll")}
                  </p>

                  <form action={removeImage}>
                    <input
                      type="hidden"
                      value={[props._id, props.imageID]}
                      name="imageID"
                    />
                    <button type="submit">
                      <MdDelete className="text-[25px] cursor-pointer text-red-500" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
