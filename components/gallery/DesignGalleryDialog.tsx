"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setGalleryDialog } from "@/redux/slice/galleryDialogSlice";
import { X } from "lucide-react";
import { extractYoutubeId } from "@/utils/extractYoutubeId";
import { categories } from "@/constant";

const DesignGalleryDialog: React.FC = () => {
  const { galleryItem: selectedMedia, isOpen: isModalOpen } = useSelector(
    (state: RootState) => state.galleryDialogReducer
  );

  const dispatch = useDispatch();
  const closeModal = (): void => {
    dispatch(setGalleryDialog({ galleryItem: null, isOpen: false }));
  };

  // const navigateMedia = (direction: "next" | "prev"): void => {
  //   if (!selectedMedia) return;

  //   const currentIndex = filteredItems.findIndex(
  //     (item) => item.id === selectedMedia.id
  //   );
  //   const newIndex =
  //     direction === "next"
  //       ? (currentIndex + 1) % filteredItems.length
  //       : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
  //   setSelectedMedia(filteredItems[newIndex]);
  // };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-[#000000b0] z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {/* {filteredItems.length > 1 && (
              <>
                <button
                  // onClick={() => navigateMedia("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  // onClick={() => navigateMedia("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )} */}

            {/* Media Content */}
            <div className="bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
              <div className="relative flex-1">
                {selectedMedia.type === "image" ? (
                  <div className="relative aspect-[16/10] max-h-[70vh]">
                    <Image
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/9] max-h-[70vh]">
                    {/* <video
                      src={selectedMedia.videoSrc}
                      controls
                      className="w-full h-full object-contain"
                      autoPlay
                    >
                      Your browser does not support the video tag.
                    </video> */}

                    <iframe
                      className="size-full"
                      src={`https://www.youtube.com/embed/${extractYoutubeId(
                        selectedMedia.videoSrc || ""
                      )}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="p-6 border-t">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedMedia.title}
                    </h2>
                    <p className="text-gray-600">{selectedMedia.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-100 text-teal-800 rounded-full">
                      {categories.find(
                        (cat) => cat.id === selectedMedia.category
                      )?.name || "General"}
                    </span>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                      {selectedMedia.type === "video" ? "Video" : "Image"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignGalleryDialog;
