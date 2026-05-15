/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export interface AchievementCardProps {
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
  index?: number;
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
    if (!hasMultipleImages || isModalOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [hasMultipleImages, galleryImages.length, isModalOpen]);

  const imageSection = galleryImages.length > 0 && (
    <div className="w-full md:w-48 lg:w-64 xl:w-80 h-48 md:h-64 lg:h-full flex-shrink-0 overflow-hidden bg-muted relative cursor-pointer" onClick={() => setIsModalOpen(true)}>
      <img
        src={galleryImages[currentImageIndex]}
        alt={`${title} image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover select-none"
        loading="lazy"
        decoding="async"
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
  );

  return (
    <>
      <Card className="overflow-hidden border border-border hover:ring-2 hover:ring-muted hover:shadow-lg flex flex-col md:flex-row min-h-64 md:min-h-80">
        <div className={`flex flex-col md:flex-row w-full ${imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
          {imageSection}
          <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary">{category}</Badge>
              </div>
              
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 leading-tight">{title}</h3>
              
<p className="text-xs sm:text-sm text-muted-foreground mb-1">{organization}</p>
            
            <span className="text-xs text-muted-foreground mb-3 sm:mb-4 block">{date}</span>
            
            <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-muted-foreground line-clamp-2 sm:line-clamp-none">{description}</p>
              
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm" className="w-full md:w-1/2">
                    Read More
                    <ExternalLink className="size-3 ml-2" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>

      {isModalOpen && galleryImages.length > 0 && (
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 sm:h-6 w-5 sm:w-6" />
            </button>

            <img
              src={galleryImages[currentImageIndex]}
              alt={`${title} image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
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
