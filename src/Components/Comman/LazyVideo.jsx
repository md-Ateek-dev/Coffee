import { useRef, useEffect } from "react";

/**
 * Lazy-load background videos — only plays when visible (saves bandwidth + faster page load)
 */
const LazyVideo = ({
  src,
  className = "",
  priority = false,
  poster,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (priority) {
      video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "80px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [priority, src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      {...props}
    />
  );
};

export default LazyVideo;
