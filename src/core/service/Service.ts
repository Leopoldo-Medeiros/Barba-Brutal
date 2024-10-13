export interface Service {
    image: string | StaticImport;
    id: number;
    name: string;
    description: string;
    price: number;
    qntSlots: number;
    imageURL: string;
}