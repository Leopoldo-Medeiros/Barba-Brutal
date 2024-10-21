import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface RatingProps {
    grade: number;
    qntRating: number;
}

export default function Rating(props: RatingProps) {
    // NOTE: Implement the Rating component into stars
    const {grade, qntRating} = props

    const stars = Array.from({ length: 5 }, (_, i) => {
        const value = i + 1

        if(grade >= value) {
            return <IconStarFilled key={i} size={18} />
        } else if (grade > value - 1){
            return <IconStarHalfFilled key={i} size={18} />
        } else {
            return <IconStar key={i} size={18} />
        }
    })

    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-1 text-yellow-400">{stars}</div>
            <span className='text-xs text-zinc-300'>({qntRating})</span>
        </div>
    )
}