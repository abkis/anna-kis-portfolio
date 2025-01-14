import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, Box } from '@material-ui/core';
import Image from "next/image";

const GalleryModal = ({ open, closeModal, imageURLs, currentIndex, prevSlide, nextSlide } : 
    {open : any, closeModal : any, imageURLs : string[], currentIndex : number, prevSlide : any, nextSlide : any}) => {
  return (
    <Modal
      open={open}
      onClose={closeModal}
      closeAfterTransition
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)", // Blur the background
        backgroundColor: "rgba(0, 0, 0, 0.5)", // dimmed effect, optional
      }}
    >
      <Box
        style={{
          position: "relative",
          width: "35%",
          height: "55%",
          backgroundColor: "white", // Ensure the modal content has a background
          borderRadius: "12px",
          boxShadow: "24",
          padding: "2", // padding inside the box
          outline: "none", // Remove focus outline
        }}
      >
        <Image
          src={imageURLs[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
        <button
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md bg-gray-800 text-white flex items-center justify-center group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md bg-gray-800 text-white flex items-center justify-center group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
      </Box>
    </Modal>
  );
};

export default GalleryModal;
