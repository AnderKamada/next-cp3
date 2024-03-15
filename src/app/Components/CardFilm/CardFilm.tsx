
interface CardFilmProps {
    title: string;
    image: string;
    link: string;
};

const CardFilm = ({ title, image, link }: CardFilmProps) => {
    return (
        <div className="cardFilm border-2 border-black rounded p-4">
            <h2 className="flex justify-center items-center bg-blue-500 text-white">{title}</h2>

            <img src={image} alt={title} className="image" width="200" height="200" />

            <div className="flex justify-center items-center bg-red-500" >
                <a href={link}>Ver o trailer</a>
            </div>
        </div>
    );
};

export default CardFilm;
