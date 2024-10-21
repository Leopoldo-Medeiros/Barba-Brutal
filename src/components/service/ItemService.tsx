import { Service } from '@/core/service/Service';
import Image from 'next/image';

export interface ItemServiceProps {
  service: Service;
}

export default function ItemService(props: ItemServiceProps) {
  const { service } = props;
  return (
    <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
      <Image
        src={service.imageURL} // Use the URL from the service object
        alt={service.name}
        width={150}
        height={150}
        className="object-cover"
      />
      <div className="flex flex-col p-5 gap-2">
        <span className="text-xl font-black">{service.name}</span>
        <span className="text-xs text-zinc-400 flex-1">{service.description}</span>
        <span className="text-xs font-bold">$ {service.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
