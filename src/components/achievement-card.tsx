/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface AchievementCardProps {
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
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
}: AchievementCardProps) {
  const galleryImages = images && images.length > 0 ? images : image ? [image] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = galleryImages.length > 1;

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
  return (
    <Card className="overflow-hidden h-full flex flex-col border border-border transition-all duration-500 ease-out hover:ring-2 hover:ring-muted hover:scale-[1.02] hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="w-full h-64 overflow-hidden bg-muted relative">
          {galleryImages.length > 0 ? (
            <>
              <img
                src={galleryImages[currentImageIndex]}
                alt={`${title} image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {galleryImages.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 w-1.5 rounded-full ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {date}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{organization}</p>
          <p className="text-sm leading-relaxed mb-4 flex-1">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="w-full">
                Explore Achievement
                <ExternalLink className="size-3 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
