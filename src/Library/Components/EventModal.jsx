import React from "react";
import CustomModal from "../../CommonComponents/CustomModal";
import { FileUpload } from "./SVG";

const EventModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ModalWidth={"w-[867px]"}
      >
        <div className="bg-[#E4E4F0] rounded-lg relative pb-10">
          <div className="flex flex-col items-center text-center p-10">
            <img
              src="/images/profile.png"
              alt="profile"
              width={76}
              height={76}
            />
            <h2 className="mt-3 text-2xl font-medium">
              Upload Book To Library Catalog
            </h2>
            <div class="mt-4 flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="p-5 w-[340px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="mt-3 flex flex-col items-center justify-center">
                  {FileUpload}
                  <p class="mt-5 text-base text-[#46BF7E]">
                    Drag and drop a file to upload
                  </p>
                  <p class="text-sm text-[#6B7280]">
                    PNG, JPG, GIF up to 5MB
                  </p>
                <div className="mt-14 w-fit bg-[#46BF7E] py-2.5 px-4 rounded-lg text-sm font-medium text-white">Browse Files</div>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default EventModal;
