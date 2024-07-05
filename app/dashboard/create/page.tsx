// "use server";
import React from "react";
import { MdPhotoAlbum } from "react-icons/md";
import { ImageUpload } from "../components/imageUpload";

const page = () => {
  const addMemory = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const image = formData.get("image") as File;

    const file = await image.arrayBuffer();
    const buffer = new Uint8Array(file);

    ImageUpload(buffer);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[400px] border rounded-md min-h-[200px] p-4">
        <p className="pb-5 mb-5 border-b w-full uppercase text-[12px] font-semibold flex justify-between items-center">
          <div> Adding up new Memory</div>
          {/* <Close /> */}
        </p>

        <form action={addMemory}>
          <div className="flex gap-3 items-center w-full">
            <div className="flex flex-col flex-1">
              <label className="text-[12px] font-semibold">
                Title this Memo
              </label>
              <input
                name="title"
                placeholder="Title your Memory"
                type="text"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <div>
              <label htmlFor="image" className="text-[45px] cursor-pointer">
                <MdPhotoAlbum />
              </label>

              <input name="image" type="file" id="image" className="hidden" />
            </div>
          </div>
          <button
            className="flex items-center justify-center w-full h-[55px] bg-blue-950 text-white mt-5 rounded-md"
            type="submit"
            // onClick={() => {
            //   setToggle(false);
            // }}
          >
            Create Memory
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
