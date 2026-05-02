"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK =
  "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg";

export function SafeImage({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  ...props
}: SafeImageProps) {
  const resolvedSrc = src || fallbackSrc;
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"] | null>(null);
  const currentSrc = failedSrc === resolvedSrc ? fallbackSrc : resolvedSrc;

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc === resolvedSrc) {
          setFailedSrc(resolvedSrc);
        }
      }}
      data-fallback-active={currentSrc === fallbackSrc ? "true" : undefined}
    />
  );
}
