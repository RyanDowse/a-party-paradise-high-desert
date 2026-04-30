import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  label: string;
  aspectRatio?: string;
  rounded?: boolean;
  className?: string;
  imageClassName?: string;
  imagePosition?: string;
  priority?: boolean;
  sizes?: string;
};

export default function PlaceholderImage({
  src,
  alt,
  label,
  aspectRatio = "16/9",
  rounded = true,
  className = "",
  imageClassName = "",
  imagePosition,
  priority = false,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: Props) {
  const roundedClass = rounded ? "rounded-2xl" : "";
  const fallbackBg = src
    ? ""
    : "bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] ring-1 ring-[#1E2A3A]/10";

  return (
    <div
      role="img"
      aria-label={alt ?? label}
      style={{ aspectRatio }}
      className={`relative w-full overflow-hidden ${roundedClass} ${fallbackBg} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
          className={`object-cover ${imageClassName}`}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 12px, rgba(30,42,58,0.06) 12px 13px)",
            }}
          />
          <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#1E2A3A]/60">
                Image placeholder
              </div>
              <div className="mt-2 text-sm font-medium text-[#1E2A3A]/80 sm:text-base">
                {label}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
