import Image from "next/image";

export default function Img({
  sourse,
  alt = "",
  imageClassName,
  containerClassName="",
  children,
}) {
  return (
    <div className={`${containerClassName} relative `}>
      <Image
        src={sourse || ""}
        fill
        alt={alt}
        className={`${imageClassName} object-center object-cover`}
      />
      {children}
    </div>
  );
}
