import Professional from "@/core/professional/Professional";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Image from 'next/image';
import Rating from "../shared/Rating";

export interface ItemProfessionalProps {
  professional: Professional;
}

export default function ItemProfessional(props: ItemProfessionalProps) {
  const { professional } = props;
  return (
    <div className="flex flex-col rounded-xl bg-zinc-800 overflow-hidden">
      <div className="relative h-72 w-full">
          <Image 
              src={professional.imageURL} 
              fill 
              alt={professional.name} 
              className="object-cover object-top" 
          />
      </div>
      <div className="flex flex-col p-4 gap-5">
        <span className="text-2xl ">{professional.name}</span>
        <span className='text-sm text-zinc-400'>{professional.description}</span>

        <Rating grade={professional.rating} qntRating={professional.qntRating} />

        <div className="flex">
            <IconBrandYoutube stroke={1} />
            <IconBrandInstagram stroke={1} />
            <IconBrandTwitter stroke={1} />
            <IconBrandLinkedin stroke={1} />
        </div>
      </div>
    </div>
  );
}
