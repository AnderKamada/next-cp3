import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className="bg-black p-12 flex items-center">
                <Image
                    className="logo"
                    src="/claquete.png"
                    alt="Imagem de uma claquete"
                    width={100}
                    height={100}
                />
                <h1 className="text-white text-center text-2xl font-bold mx-auto">
                    aqui só tem filme supimpa
                </h1>
            </header>
        </>
    );
};

export default Header;

