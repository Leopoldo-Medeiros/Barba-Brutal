// File: src/data/constants/professionals.ts
import Professional from '@/core/professional/Professional';

const professionals: Professional[] = [
    {
        id: 1,
        name: "John Doe",
        profession: "Barber",
        description: "Experienced barber with over 10 years in the industry.",
        imageURL: "/professionals/profissional-1.jpg", // Corrigido o caminho da imagem
        rating: 4.5,
        qntRating: 100
    },
    {
        id: 2,
        name: "Jane Smith",
        profession: "Stylist",
        description: "Expert stylist specializing in modern cuts and colors.",
        imageURL: "/professionals/profissional-2.jpg", // Corrigido o caminho da imagem
        rating: 2.5,
        qntRating: 150
    },
    {
        id: 3,
        name: "Alice Johnson",
        profession: "Hairdresser",
        description: "Professional hairdresser with a passion for creative styles.",
        imageURL: "/professionals/profissional-3.jpg", // Corrigido o caminho da imagem
        rating: 4.3,
        qntRating: 120
    },
    {
        id: 4,
        name: "Michael Brown",
        profession: "Barber",
        description: "Skilled barber specializing in classic and modern cuts.",
        imageURL: "/professionals/profissional-4.jpg", // Corrigido o caminho da imagem
        rating: 4.6,
        qntRating: 130
    },
    {
        id: 5,
        name: "Dave Wilson",
        profession: "Stylist",
        description: "Trendsetting stylist with a flair for unique and bold looks.",
        imageURL: "/professionals/profissional-5.jpg", // Corrigido o caminho da imagem
        rating: 4.8,
        qntRating: 140
    },
    {
        id: 6,
        name: "Sarah Davis",
        profession: "Hairdresser",
        description: "Creative hairdresser specializing in avant-garde styles.",
        imageURL: "/professionals/profissional-6.jpg", // Corrigido o caminho da imagem
        rating: 4.4,
        qntRating: 110
    }
    // Adicione mais profissionais conforme necessário
];

export default professionals;