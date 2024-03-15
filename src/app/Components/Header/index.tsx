
import Image from "next/image";const Header = () => {

    return (
        <>
       <header className="bg-yellow-400 p-12 flex items-center">
       <Image
                  className="icone"
                 src="/icone.png"
                  alt="botão de play"
                   width={100}
                  height={100}
                  />
        <p className="text-black text-center text-2xl font-bold mx-auto">
            Os melhores filmes estão aqui
        </p>
       </header>
        </>
    );
};

export default Header;