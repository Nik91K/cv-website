import { Dialog, DialogContent, DialogTrigger } from '@components/ui/dialog';

type Props = {
  image: string;
  imageAlt: string;
};

export default function ImageDialog({ image, imageAlt }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={image}
          alt={imageAlt}
          className="
            w-full h-full object-cover
            cursor-zoom-in
            transition-transform duration-300
            hover:scale-105
          "
          loading="lazy"
        />
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-4xl border-none"
        showCloseButton={true}
      >
        <img src={image} alt={imageAlt} className="w-full h-auto rounded-lg" />
      </DialogContent>
    </Dialog>
  );
}
