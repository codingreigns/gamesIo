import placeholder from "@/assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

const cropImageUrl = (url: string) => {
  if (!url) return placeholder;
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default cropImageUrl;
