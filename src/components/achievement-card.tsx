/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Helper function to render title with superscript
const renderTitleWithSuperscript = (text: string) => {
  const parts = text.split(/(\d+(?:st|nd|rd|th))/g);
  return parts.map((part, idx) => {
    const match = part.match(/(\d+)(st|nd|rd|th)/);
    if (match) {
      return (
        <span key={idx}>
          {match[1]}
          <sup>{match[2]}</sup>
        </span>
      );
    }
    return part;
  });
};

export interface AchievementCardProps {
  title: string;
  category?: string;
  date?: string;
  organization?: string;
  description?: string;
  image?: string;
  images?: string[];
  link?: string;
  index?: number;
  isResearchLayout?: boolean;
  showBorder?: boolean;
  compact?: boolean;
}

export function AchievementCard({
  title,
  category,
  date,
  organization,
  description,
  image,
  images,
  link,
  index = 0,
  isResearchLayout = false,
  showBorder = false,
  compact = false,
}: AchievementCardProps) {
  const galleryImages = images && images.length > 0 ? images : image ? [image] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasMultipleImages = galleryImages.length > 1;
  const imageOnLeft = index % 2 === 0;

  const goToPreviousImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isModalOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!hasMultipleImages || isModalOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [hasMultipleImages, galleryImages.length, isModalOpen]);

  const imageSection = galleryImages.length > 1 && isResearchLayout ? (
    // Research layout - multiple images side by side
    <div className="w-full flex gap-24 justify-center items-center py-0">
      {galleryImages.map((imgUrl, idx) => (
        <div key={idx} className="h-80 md:h-96 overflow-visible bg-transparent relative w-80 md:w-96">
          <Image
            src={imgUrl}
            alt={`${title} image ${idx + 1}`}
            fill
            className="object-contain select-none"
            quality={75}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  ) : galleryImages.length > 0 ? (
    // Achievement layout - original with carousel
    <div className="w-full md:w-2/5 h-64 sm:h-72 md:h-full overflow-hidden bg-muted relative cursor-pointer flex-shrink-0 rounded-md" onClick={() => setIsModalOpen(true)}>
      <Image
        src={galleryImages[currentImageIndex]}
        alt={`${title} image ${currentImageIndex + 1}`}
        fill
        className="object-cover select-none"
        priority={index === 0}
        quality={75}
        sizes="(max-width: 768px) 100vw, 40vw"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={goToPreviousImage}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goToNextImage}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 flex gap-1">
            {galleryImages.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${
                  idx === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  ) : null;

  // Placeholder for cards without images
  const imagePlaceholder = !imageSection ? (
    <div className="w-full md:w-2/5 h-64 sm:h-72 md:h-full bg-muted rounded-md flex-shrink-0 flex items-center justify-center">
      <div className="text-muted-foreground text-sm">Image available</div>
    </div>
  ) : null;

  return (
    <>
      {isResearchLayout ? (
        // Research layout — use the same achievement card layout but with more height for content
        <div className="overflow-hidden flex flex-col md:flex-row rounded-lg min-h-80 md:min-h-96 border border-border">
          <div className="flex flex-col md:flex-row w-full">
            {imageSection || imagePlaceholder}
            <div className="flex flex-col flex-1 justify-between p-5 sm:p-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  {category && <Badge variant="secondary">{category}</Badge>}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">{renderTitleWithSuperscript(title)}</h3>

                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{organization}</p>

                <span className="text-xs text-muted-foreground mb-3 sm:mb-4 block">{date}</span>

                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-muted-foreground">{description}</p>

                {link && (
                  <a
                    href={link}
                  >
                    <Button variant="default" size="sm" className="w-full md:w-2/3">
                      Read More
                      <ExternalLink className="size-3 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Original achievement layout
        <div className={`overflow-hidden flex flex-col md:flex-row rounded-lg ${compact ? 'min-h-24 md:min-h-40' : 'min-h-64 md:min-h-80'} ${showBorder ? 'border border-border' : ''}`}>
          <div className={`flex flex-col md:flex-row w-full ${imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {imageSection || imagePlaceholder}
            <div className={`flex flex-col flex-1 ${index === 0 ? 'justify-start p-5 sm:p-6 pt-5 sm:pt-6' : 'justify-between p-5 sm:p-6'}`}>
              <div>
                <div className="flex items-start justify-between mb-4">
                  {category && <Badge variant="secondary">{category}</Badge>}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">{renderTitleWithSuperscript(title)}</h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{organization}</p>
              
                <span className="text-xs text-muted-foreground mb-3 sm:mb-4 block">{date}</span>
                
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-muted-foreground">{description}</p>
                
                {link && (
                  <a
                    href={link}
                  >
                    <Button variant="default" size="sm" className="w-full md:w-2/3">
                      Read More
                      <ExternalLink className="size-3 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && galleryImages.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl h-80 sm:h-96 bg-black rounded-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 sm:h-6 w-5 sm:w-6" />
            </button>

            <Image
              src={galleryImages[currentImageIndex]}
              alt={`${title} image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
              quality={90}
              onClick={(e) => e.stopPropagation()}
            />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreviousImage(e);
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 sm:h-6 w-4 sm:w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage(e);
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 sm:h-6 w-4 sm:w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
