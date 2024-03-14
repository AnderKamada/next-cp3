import Image from "next/image";

const Header = () => {
    return(
        <>

        <header className="bg-black p-12 flex" >
            <img src="/public/claquete.png" width="120" height="120" alt= "claquete"/>
                <p className="text-white">oia o header aqui</p>  
        </header>
        </>
    );
};

export default Header;