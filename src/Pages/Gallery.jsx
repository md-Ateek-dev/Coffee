import Navbar from "@/Components/Comman/Navbar";
import Footer from "@/Components/Comman/Footer";
import PageTransition from "@/Components/Comman/PageTransition";
import CoffeeMoments from "@/Components/Gallery/CoffeeMoments";
import GalleryHero from "@/Components/Gallery/GalleryHero";
import InstagramFeed from "@/Components/Gallery/InstagramFeed";
import MasonryGallery from "@/Components/Gallery/MasonryGallery";
import VideoGallery from "@/Components/Gallery/VideoGallery";

const Gallery = () => {
  return (
    <PageTransition>
      <Navbar />
      <GalleryHero />
      <CoffeeMoments />
      <VideoGallery />
      <MasonryGallery />
      <InstagramFeed />
      <Footer />
    </PageTransition>
  );
};

export default Gallery;