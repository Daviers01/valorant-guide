"use client";

const VideoPlayer = (props: any) => {
  const { src } = props;
  return (
    <div className="video-player mt-4">
      <video preload={"auto"} loop playsInline autoPlay controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
