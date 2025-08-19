export default function CarouselCard({children , className=""}) {
  return (
    <div className={`flex flex-col relative ${className}`}>
      {children}
    </div>
  );
}
