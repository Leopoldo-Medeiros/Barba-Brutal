// File: src/components/professional/OurProfessionals.tsx
import professionals from "@/data/constants/professionals";
import ItemProfessional from "./ItemProfessional";

export default function OurProfessionals() {
    return (
        <div className="our-professionals grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionals.map((professional) => (
                <ItemProfessional key={professional.id} professional={professional} />
            ))}
        </div>
    );
}