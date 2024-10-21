// File: src/app/page.tsx
import OurServices from "@/components/service/OurServices";
import OurProfessionals from "@/components/professional/OurProfessionals";

export default function HomePage() {
    return (
        <div className="home-page container mx-auto p-4">
            <section className="mb-8">
                <h1 className="text-2xl font-bold mb-4">Our Services</h1>
                <OurServices />
            </section>
            <section>
                <h1 className="text-2xl font-bold mb-4">Our Professionals</h1>
                <OurProfessionals />
            </section>
        </div>
    );
}