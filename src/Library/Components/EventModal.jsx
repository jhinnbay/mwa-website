import React, { useEffect, useState } from "react";
import CustomModal from "../../CommonComponents/CustomModal";
import { FileUpload, logo } from "./SVG";
import { GridLoader } from "react-spinners";

const EventModal = ({ isOpen, setIsOpen }) => {
  const [Loading, setLoading] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(null);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  useEffect(() => {
    if (isFileUpload) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsSuccessModal(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccessModal(false);
        }, 3000);
      }, 3000);
    }
  }, [isFileUpload, setIsOpen]);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setIsFileUpload(file);
  };
  
  const handleModalsClose = () => {
    setIsOpen(false);
    setIsSuccessModal(false);
  }

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ModalWidth={"w-[867px]"}
      >
        <div className="bg-[#E4E4F0] rounded-lg relative">
          {!isSuccessModal ? (
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
              <div className="mt-4 flex items-center justify-center w-full">
                {!isFileUpload ? (
                  <label
                    onClick={() => setLoading(true)}
                    htmlFor="dropzone-file"
                    className="p-5 w-[340px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="mt-3 flex flex-col items-center justify-center">
                      {FileUpload}
                      <p className="mt-5 text-base text-[#46BF7E]">
                        Drag and drop a file to upload
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        PNG, JPG, GIF up to 5MB
                      </p>
                      <div className="mt-14 w-fit bg-[#46BF7E] py-2.5 px-4 rounded-lg text-sm font-medium text-white">
                        Browse Files
                      </div>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <GridLoader loading={Loading} color="#36d7b7" />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center pt-10">
              <h2 className="text-7xl font-semibold eb-garamond">
                Update Successfully
              </h2>
              <button
                onClick={handleModalsClose}
                className="mt-10 max-w-[548px] w-full rounded-2xl roboto px-9 text-white roboto flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #222225 0%, #15151B 100%)",
                }}
              >
                Back to library
                {logo}
              </button>
              <img
                src="/images/fileUploadTooltip.png"
                alt="fileUploadTooltip"
                className="max-w-[311px] w-full h-auto mt-8"
              />
              <img src="/images/cartoon.png" alt="cartoon" />
            </div>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default EventModal;
