import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

interface categoryTypes {
    id: number;
    text: string;
    lowerSearchText?: string;
}


const categoryArray: categoryTypes[]= [ 
    {
        id: 0,
        text: 'Buy',
    },
    {
        id: 1,
        text: 'Rent',
    },
    {
        id: 2,
        text: 'New Launch',
        lowerSearchText: 'Residential'
    },
    {
        id: 3,
        text: 'PG / Co-living',
    },
    {
        id: 4,
        text: 'Plots/Land',
    },
    {
        id: 5,
        text: 'Project',
        lowerSearchText: 'Residential Project'
    }
]

export default function SearchDialog() {
    const [searchState, setSearchState]= useState(0);
    const [textState, setTextState]= useState('All Residentials');
    const handleChanger= (id: number, text?: string)=> {
        setSearchState(id);
        setTextState(text || 'All Residentials');
    }
    return (
        <div className="w-[60%] bg-white rounded-xl flex flex-col py-2 px-[1.5%] absolute -bottom-[10vh] shadow-xl">
            <div className="flex justify-between py-2">
                {categoryArray.map((category)=> {
                    return <button 
                        className={`text-lg px-2 ${category.id == searchState ? 'py-2 border-b-[3px] border-solid border-blue-600 shadow-sm' : ''}`} 
                        onClick={()=> handleChanger(category.id, category.lowerSearchText)} 
                        disabled={category.id == searchState}
                        >
                            {category.text}
                        </button>
                })}
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="flex items-center py-2 text-lg">
                <div className="w-[22%] flex items-end gap-2">
                    {textState} 
                    <div className="h-full -rotate-90 scale-y-[2]">{'<'}</div>    
                </div>
                <div className="w-[60%] flex items-center gap-2 mr-[5%]">
                    <CiSearch />
                    <input type="search" className="w-full" placeholder="Search"/>
                </div>
                <div className="justify-self-end flex items-center gap-4">
                    <FaLocationCrosshairs className="text-blue-600"/>
                    <FaMicrophone className="text-blue-600"/>
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg">Search</button>
                </div>
            </div>
        </div>
    );
}
