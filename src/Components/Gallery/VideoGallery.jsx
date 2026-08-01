import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";

import poster1 from "../../assets/images/gallery/video-1.webp";
import poster2 from "../../assets/images/gallery/video-2.webp";
import poster3 from "../../assets/images/gallery/video-3.webp";

import videoSrc1 from "../../assets/videos/Gallery_Video1.mp4";
import videoSrc2 from "../../assets/videos/Gallery_Video2.mp4";
import videoSrc3 from "../../assets/videos/Gallery_Video3.mp4";

const videos = [
  {
    id: 1,
    title: "Artisanal Coffee Pour Over",
    duration: "0:15",
    thumbnail: poster1,
    videoUrl: videoSrc1,
    description: "Watch our master baristas craft precision pour-overs with optimal extraction.",
  },
  {
    id: 2,
    title: "Latte Art Masterclass",
    duration: "0:12",
    thumbnail: poster2,
    videoUrl: videoSrc2,
    description: "Intricate rosettes and tulip pours crafted in slow motion.",
  },
  {
    id: 3,
    title: "Highland Bean Harvest",
    duration: "0:18",
    thumbnail: poster3,
    videoUrl: videoSrc3,
    description: "Explore our eco-friendly organic highland bean plantations in Colombia.",
  },
];

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Initialize video element properties for browser policy compliance
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          });
      }
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    playVideo();
  };

  const handleMouseLeave = () => {
    pauseVideo();
  };

  const toggleClickPlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="
        video-card
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-[#1a1815]
        border
        border-zinc-700/70
        hover:border-amber-500
        hover:shadow-2xl
        hover:shadow-amber-500/10
        transition-all
        duration-500
        cursor-pointer
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleClickPlay}
    >
      {/* Video Box */}
      <div className="relative overflow-hidden aspect-video w-full bg-black">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnail}
          muted={true}
          loop={true}
          playsInline={true}
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay - pointer-events-none prevents mouse flicker */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity ${
            isPlaying ? "opacity-30" : "opacity-70"
          }`}
        />

        {/* Play / Pause Toggle Center Button */}
        <button
          onClick={toggleClickPlay}
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-16
            h-16
            rounded-full
            bg-amber-500
            text-black
            text-xl
            flex
            items-center
            justify-center
            shadow-2xl
            transition-all
            duration-300
            z-20
            ${isPlaying ? "scale-90 opacity-80 group-hover:opacity-100" : "scale-100 opacity-100"}
          `}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <FaPause className="text-black" /> : <FaPlay className="ml-1 text-black" />}
        </button>

        {/* Status Tag */}
        <div className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md pointer-events-none z-20">
          {isPlaying ? "▶ Playing" : "Hover / Click to Play"}
        </div>

        {/* Sound Toggle */}
        {isPlaying && (
          <button
            onClick={toggleSound}
            className="absolute top-4 right-4 bg-black/80 text-amber-400 p-2.5 rounded-full border border-zinc-700 hover:bg-amber-500 hover:text-black transition-colors z-30"
            title={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
          </button>
        )}

        {/* Duration badge */}
        <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-lg text-xs border border-zinc-700 pointer-events-none z-20">
          {video.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  useReveal(".video-gallery");

  return (
    <section className="video-gallery py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-amber-500 font-semibold text-sm">
            Watch & Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Coffee In Motion
          </h2>
          <p className="mt-4 text-zinc-300 leading-8 text-base">
            Hover or click any video below to watch our live pour-overs, latte art pours, and highland bean harvests in action.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;