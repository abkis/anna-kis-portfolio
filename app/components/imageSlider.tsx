"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryModal from "./galleryModal";

export default function ImageSlider({imageURLs}: {imageURLs: string[]}): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false); // handles open/close of modal

  // Function to show the previous slide
  const prevSlide = (): void => {
    console.log("prev index ", currentIndex, " change to ",(currentIndex - 1 + imageURLs.length) % imageURLs.length );
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageURLs.length) % imageURLs.length
    );
    console.log("new index: ", currentIndex);
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    console.log("prev index ", currentIndex, " change to ", (currentIndex + 1) % imageURLs.length );
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
    console.log("new index: ", currentIndex);
  };

  // open modal on click of image
  const openModal = (): void =>{
    setModalOpen(true);
  }

  const closeModal = (): void=>{
    setModalOpen(false);
  }

  return (
    <div className="relative w-[460px] h-[460px] mx-auto mt-4">
      {modalOpen ? (
        <GalleryModal 
        open={openModal}
        closeModal={closeModal} 
        imageURLs={imageURLs} 
        currentIndex={currentIndex} 
        prevSlide={prevSlide} 
        nextSlide={nextSlide}
        />
      ) : (
        <div className="relative w-full h-full group">
        <Image
          src={imageURLs[currentIndex]}
          alt={`Slider Image ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
          onClick={openModal}
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
      </div>
      )}
    </div>
  );
  
}