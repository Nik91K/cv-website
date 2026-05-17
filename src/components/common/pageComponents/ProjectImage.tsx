import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel';

import { motion } from 'motion/react';

type Props = {
  images: string[];
};

const ProjectImage = ({ images }: Props) => {
  const fallbackImage =
    'https://placehold.co/1200x675/1a1a1a/444?text=No+Image';

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10">
        <img
          src={fallbackImage}
          alt="No image available"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 mb-12"
      >
        <img
          src={images[0] || fallbackImage}
          alt="Project image"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    );
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i} className="basis-full">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10">
              <img
                src={image || fallbackImage}
                alt={`Project image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden lg:block">
        <CarouselPrevious />
      </div>

      <div className="hidden lg:block">
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectImage;
