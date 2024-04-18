import LogoSection from "./logoSection";
import { MdHeadphones } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenu2Fill } from "react-icons/ri";

interface navigatorTypes {
    text: string;
    link?: string;
}

const navigator: navigatorTypes[] = [
    {
        text: "For Buyers",
        link: "",
    },
    {
        text: "For Tenants",
        link: "",
    },
    {
        text: "For Owners",
        link: "",
    },
    {
        text: "For Dealers/Builders",
        link: "",
    },
    {
        text: "Insights",
        link: "",
    },
];

export default function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-between items-center px-[3%] py-[1%] text-white font-semibold">
                <LogoSection /> {/* 12% */}
                <div className="w-[60%] flex justify-between items-center">
                    {navigator.map((nav) => {
                        return (
                            <div className="text-gray-400 hover:border-b-2 hover:border-solid hover:border-blue-600 cursor-pointer">
                                {nav.text}
                            </div>
                        );
                    })}
                    <div className="flex justify-between items-center gap-2 cursor-pointer">
                        <a
                            href="https://99acres.com/postproperty/"
                            target="_blank"
                            className="bg-white text-black p-2 px-4 rounded-xl flex gap-2 hover:scale-105"
                        >
                            Post Property
                            <span className="bg-green-400 text-white text-xs p-1">
                                FREE
                            </span>
                        </a>
                        <div className="text-2xl px-1">
                            <MdHeadphones className="hover:scale-105" />
                        </div>
                        <div className="text-2xl px-1">
                            <CgProfile className="hover:scale-105" />
                        </div>
                        <div className="text-2xl px-1">
                            <RiMenu2Fill className="hover:scale-105" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
