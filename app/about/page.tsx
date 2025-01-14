'use client';
import { useEffect, useState } from 'react';
import ImageSlider from '../components/imageSlider';

export default function About() {
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/listFiles`);
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.status}`);
        }
        const data = await response.json();
        if (data.status != 200){
            console.log("Failed to fetch images :(");
        }
        const json_data = JSON.parse(data.res);
        setImageURLs(json_data.filter((item: any) => item.size > 0).map((item: any) => item.url));
    } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
        <div className="relative pb-16" >
          <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32" style={{paddingTop: "35rem"}}>
            <div className="lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
              About Me
              </h2>
              <p className="sub-text" style={{textAlign: "center"}}>
              Hi! My name is Anna Kis, I'm a first year graduate student at the University of Ohio. 
                I completed my undergraduate at the University of Waterloo, Canada, where I double majored in 
                computer science and pure mathematics. I have also studied at Lund University, in Sweden, and 
                École Polytechnique Fédérale de Lausanne, in Switzerland, while on exchange. Aside from my studies I 
                have completed a variety of internships, including computer science and research positions.
                <br/>
                In my free time I enjoy hiking and spending time outdoors, as well as reading. I'm currently in 
                a Russian Literature phase, with Dosztojevszkij being a personal favorite.
                </p>
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <div style={{
                flexGrow: 1, // Ensures this section takes up remaining space
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
            }}>
            <div style={{
            width: "25%", 
            height: "25%", 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            border: "1px solid black" // Optional for debugging layout
            }}>
            {imageURLs.length > 0 ? (
                <ImageSlider imageURLs={imageURLs}/>
            ) : (
                <p>Loading images...</p>
            )}
            </div>
          </div>
        </div>
        </div>
    );
}
