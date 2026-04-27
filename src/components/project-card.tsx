/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronLeft, ChevronRight, Hand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";
import { useMediumStats } from "@/lib/useMediumStats";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

export interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  images?: string[];
  details?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  showViewProjectButton?: boolean;
  claps?: number;
  mediumPostId?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  images,
  details,
  video,
  links,
  className,
  showViewProjectButton = true,
  claps: initialClaps,
  mediumPostId,
}: ProjectCardProps) {
  const { stats } = useMediumStats(mediumPostId || "", initialClaps || 0);
  const hasClaps = typeof initialClaps === "number" || Boolean(mediumPostId);
  // Always fetch real clap count from Medium
  const displayClaps = hasClaps
    ? (mediumPostId ? stats.claps : (initialClaps ?? 0))
    : undefined;
  const projectUrl = href || links?.[0]?.href;
  const hasProjectUrl = Boolean(projectUrl && projectUrl !== "#");
  const galleryImages = images && images.length > 0 ? images : image ? [image] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const hasMultipleImages = galleryImages.length > 1;
  const hasModalContent = Boolean(details || description || galleryImages.length > 0);
  const canOpenModal = !hasProjectUrl && hasModalContent;

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

  const goToPreviousModalImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNextModalImage = () => {
    setModalImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "auto";
      return;
    }

    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm overflow-hidden"
      onClick={() => setIsModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} details`}
    >
      <div
        className="relative w-full max-w-[800px] max-h-[84vh] rounded-3xl border border-slate-200 bg-slate-100 text-slate-900 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-slate-100 text-slate-500 z-10"
          aria-label="Close details"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex-shrink-0 p-7 pb-0">
          <div className="pr-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-base font-medium text-slate-500">{dates}</p>
            {tags && tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-slate-300" />
        </div>

        <div className="flex-1 overflow-y-auto px-7">
          <div className="pb-7">

        {galleryImages.length > 0 && (
          <div className="relative mt-6 rounded-2xl bg-slate-300/70 p-4">
            <div className="relative overflow-hidden rounded-xl border border-slate-400/40 bg-slate-900">
              <img
                src={galleryImages[modalImageIndex]}
                alt={`${title} image ${modalImageIndex + 1}`}
                className="h-auto max-h-[480px] w-full object-contain"
              />
            </div>

            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousModalImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextModalImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        )}

        <div className="mt-7 prose prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-800 max-w-none">
          <Markdown>{details || description}</Markdown>
        </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
      onClick={() => {
        if (hasProjectUrl && projectUrl) {
          window.location.href = projectUrl;
        }
      }}
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out",
        hasProjectUrl
          ? "cursor-pointer hover:ring-2 hover:ring-muted hover:scale-[1.02]"
          : "cursor-default",
        className
      )}
    >
      <div className="relative shrink-0">
        <div className="block">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : galleryImages.length > 0 ? (
            <ProjectImage src={galleryImages[currentImageIndex]} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </div>
        {!video && hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {hasProjectUrl ? (
            <a
              href={projectUrl}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {showViewProjectButton && (
          <div className="mt-2 pt-3 border-t border-border">
            {hasProjectUrl && projectUrl ? (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-md border border-white bg-white px-3 text-xs font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
              >
                View Project
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : canOpenModal ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImageIndex(currentImageIndex);
                  setIsModalOpen(true);
                }}
                className="inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-md border border-white bg-white px-3 text-xs font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
              >
                View Project
              </button>
            ) : (
              <span className="inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-3 text-xs font-medium text-muted-foreground/70 cursor-not-allowed">
                View Project
              </span>
            )}
          </div>
        )}
        {hasClaps && (
          <div className="flex gap-4 text-xs text-muted-foreground">
            {displayClaps !== undefined && (
              <div className="flex items-center gap-1.5">
                <Hand className="h-4 w-4 stroke-[1.5]" />
                <span>{displayClaps}</span>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
      {isModalOpen && isMounted ? createPortal(modalContent, document.body) : null}
    </>
  );
}
