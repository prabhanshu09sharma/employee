'use client';
import React, { useState } from 'react'
import Card from '@/components/Card'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { VscAccount } from "react-icons/vsc";


const SearchBar = () => {

    const [query, setQuery] = useState("");
    const items = useSelector((state) => state.allCart.items);


    // cart item increment start 

    const { cart } = useSelector((state) => state.allCart);

    // cart item increment end


    const search = (data) => {
        return data?.filter((item) => item?.first_name.toLowerCase().includes(query) ||
            item?.last_name.toLowerCase().includes(query))

    }

    return (
        <div className='container mx-auto'>
            <div className=" mx-auto max-w-screen-xl px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-full flex flex-grow border-[4px] border-gray-300 mr-4 pl-2 cursor-pointer py-1.5 rounded-md'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className='flex items-center gap-2 text-lg'>
                        <Link href='/SelectedCandidate'
                            className="inline-block text-sm px-4 py-2 leading-none border rounded
                                text-black border-black hover:border-transparent hover:text-teal-500
                                hover:bg-white mt-4 lg:mt-0">
                            SelectedCandidate
                        </Link>
                        <VscAccount />
                        <p className='text-black bg-yellow-400 rounded-full w-[22px] flex justify-center '>
                            {cart?.length}
                        </p>
                    </div>

                </div>
            </div>
            <div>
                <Card data={search(items)} />
            </div>
        </div>
    )
}

export default SearchBar
