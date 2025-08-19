export default function Carousel({ children, className = "" }) {
  return (
    <div
      className={`${className} flex h-full pb-4 w-full hide-scrollbar overflow-y-auto gap-6`}
    >
      {children}
    </div>
  );
}
