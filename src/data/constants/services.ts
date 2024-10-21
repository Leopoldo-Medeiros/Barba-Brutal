// src/data/constants/services.ts

// Define the Service interface
export interface Service {
    name: string;
    price: number; // Ensure this is a number
    qntSlots: number;
    imageURL: string;
    id: number;
    description: string;
  }
  
  // Service data
  const services: Service[] = [
    {
      name: 'Barba de Lenhador',
      price: 100, // Ensure this is a number
      qntSlots: 10,
      imageURL: '/services/corte-de-barba.jpg',
      id: 1,
      description: 'A precise beard trimming service to shape your beard.',
    },
    {
      name: 'Corte Viking',
      price: 200, // Ensure this is a number
      qntSlots: 5,
      imageURL: '/services/corte-de-cabelo.jpg',
      id: 2,
      description: 'Professional haircut with a modern touch.',
    },
    {
      name: 'Pequeno Caçador',
      price: 150, // Ensure this is a number
      qntSlots: 8,
      imageURL: '/services/corte-infantil.jpg',
      id: 3,
      description: 'Kids haircut with special care and comfort.',
    },
    {
      name: 'Combo Alpha',
      price: 250, // Ensure this is a number
      qntSlots: 7,
      imageURL: '/services/combo.jpg',
      id: 4,
      description: 'Special haircut for events or special occasions.',
    },
    {
      name: 'Noivo Raiz',
      price: 180, // Ensure this is a number
      qntSlots: 6,
      imageURL: '/services/dia-de-noivo.jpg',
      id: 5,
      description: 'Fade cut with a smooth transition for a modern look.',
    },
    {
      name: 'Garras Brutais',
      price: 220, // Ensure this is a number
      qntSlots: 4,
      imageURL: '/services/manicure-pedicure.jpg',
      id: 6,
      description: 'Quick haircut service for those in a rush.',
    },
  ];
  
  // Export the services array
  export default services;
  