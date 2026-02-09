import Image from "next/image";

const Header = ({
    title,
    subtitle
} : {
    title : string;
    subtitle : string;
}) => {
  return (
    <header className="relative h-60 text-stone-50 overflow-hidden">
        <div className="absolute inset-0">
            
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
            <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
            <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
    </header>
  )
}

export default Header