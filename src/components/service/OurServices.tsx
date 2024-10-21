// File: src/components/service/OurServices.tsx
import React from 'react';
import ItemService from './ItemService';
import { Service } from '@/core/service/Service';

const services: Service[] = [
  {
    id: 1,
    name: 'Barba Lenhador',
    description: 'Description for Service 1',
    price: 100,
    qntSlots: 10,
    imageURL: '/services/corte-de-barba.jpg',
  },
  {
    id: 2,
    name: 'Corte Viking',
    description: 'Description for Service 2',
    price: 200,
    qntSlots: 5,
    imageURL: '/services/corte-de-cabelo.jpg',
  },
  {
    id: 3,
    name: 'Pequeno caçador',
    description: 'Description for Service 3',
    price: 150,
    qntSlots: 8,
    imageURL: '/services/corte-infantil.jpg',
  },
  {
    id: 4,
    name: 'Combo Alpha',
    description: 'Description for Service 4',
    price: 120,
    qntSlots: 7,
    imageURL: '/services/combo.jpg',
  },
  {
    id: 5,
    name: 'Noivo Raíz',
    description: 'Description for Service 5',
    price: 180,
    qntSlots: 6,
    imageURL: '/services/dia-de-noivo.jpg',
  },
  {
    id: 6,
    name: 'Garras Brutais',
    description: 'Description for Service 6',
    price: 130,
    qntSlots: 9,
    imageURL: '/services/manicure-pedicure.jpg',
  },
];

const OurServices = () => {
  return (
    <div className="our-services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <ItemService key={service.id} service={service} />
      ))}
    </div>
  );
};

export default OurServices;