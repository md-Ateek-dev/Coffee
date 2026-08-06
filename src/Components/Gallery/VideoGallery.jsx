import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import videoSrc1 from "../../assets/videos/Gallery_Video1.mp4";
import videoSrc2 from "../../assets/videos/Gallery_Video2.mp4";
import videoSrc3 from "../../assets/videos/Gallery_Video3.mp4";

const videos = [
  {
    id: 1,
    title: "Artisanal Coffee Pour Over",
    duration: "0:15",
    videoUrl: videoSrc1,
    description:
      "Watch our master baristas craft precision pour-overs with optimal extraction.",
  },
  {
    id: 2,
    title: "Latte Art Masterclass",
    duration: "0:12",
    videoUrl: videoSrc2,
    description: "Intricate rosettas and tulip pours crafted in slow motion.",
  },
  {
    id: 3,
    title: "Highland Bean Harvest",
    duration: "0:18",
    videoUrl: videoSrc3,
    description:
      "Explore our eco-friendly organic highland bean plantations in Colombia.",
  },
];

const VideoCard = ({ video, index, isVisible }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
              videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
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
      data-index={index}
      className={`
        video-card
        group
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        bg-[#1a1815]
        border
        border-zinc-700/70
        hover:border-amber-500
        hover:shadow-2xl
        hover:shadow-amber-500/10
        transition-all
        duration-500
        cursor-pointer
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
      `}
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
        transitionDuration: "700ms",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleClickPlay}
    >
      {/* Video Box */}
      <div className="relative overflow-hidden aspect-video w-full bg-black rounded-t-2xl sm:rounded-t-3xl">
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

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-300 ${
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
            w-12
            h-12
            sm:w-14
            sm:h-14
            md:w-16
            md:h-16
            rounded-full
            bg-amber-500
            text-black
            text-lg
            sm:text-xl
            flex
            items-center
            justify-center
            shadow-2xl
            transition-all
            duration-300
            z-20
            ${isPlaying ? "scale-90 opacity-0 group-hover:opacity-80" : "scale-100 opacity-100"}
          `}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <FaPause className="text-black text-sm sm:text-base" />
          ) : (
            <FaPlay className="ml-0.5 text-black text-sm sm:text-base" />
          )}
        </button>

        {/* Status Tag */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-amber-500 text-black text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-md pointer-events-none z-20">
          {isPlaying ? "▶ Playing" : "Hover / Click"}
        </div>

        {/* Sound Toggle */}
        {isPlaying && (
          <button
            onClick={toggleSound}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/80 text-amber-400 p-2 sm:p-2.5 rounded-full border border-zinc-700 hover:bg-amber-500 hover:text-black transition-colors z-30"
            title={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <FaVolumeMute size={12} className="sm:hidden" />
            ) : (
              <FaVolumeUp size={12} className="sm:hidden" />
            )}
            {isMuted ? (
              <FaVolumeMute size={14} className="hidden sm:block" />
            ) : (
              <FaVolumeUp size={14} className="hidden sm:block" />
            )}
          </button>
        )}

        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/80 backdrop-blur-md text-amber-400 font-bold px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs border border-zinc-700 pointer-events-none z-20">
          {video.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
          {video.title}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  useReveal(".video-gallery");
  const gridRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const cards = gridRef.current?.querySelectorAll(".video-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-gallery py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="uppercase tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] text-amber-500 font-semibold text-xs sm:text-sm">
            Watch & Learn
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-white leading-tight">
            Coffee In Motion
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 leading-relaxed sm:leading-8 text-sm sm:text-base px-2 sm:px-0">
            Hover or click any video below to watch our live pour-overs, latte
            art pours, and highland bean harvests in action.
          </p>
        </div>

        {/* Videos Grid */}
        <div
          ref={gridRef}
          className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              isVisible={visibleCards[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
