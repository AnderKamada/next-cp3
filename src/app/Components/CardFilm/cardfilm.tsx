interface CardFilmProps {
    title: string;
    image: string;
    link: string;
     }; 

     const CardFilm = ({ title, image, link }: CardFilmProps) => {
        return (
            <div className="cardFilm border-4 border-black rounded p-4">
                <h2 className="flex justify-center items-center bg-stone-950 text-white">{title}</h2>
    
                <img src={image} alt={title} className="image" width="200" height="200" />
    
                <div className="flex justify-center items-center bg-amber-500" >
                    <a href={link}>Assistir</a>
                </div>
            </div>
        );
    };
    
    export default CardFilm;