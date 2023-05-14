'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { addToCart } from '@/app/GlobalRedux/features/cart/cartSlice';

const Card = ({ data }) => {

    const dispatch = useDispatch();

    // pagination start 
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 20;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex, lastIndex);
    const nPage = Math?.ceil(data?.length / recordsPerPage)
    // const numbers = [...Array(nPage + 1).keys()].slice(1)

    // pagination end
    return (
        <div>
            <div className='container grid gap-3 md:grid-cols-2 lg:grid-cols-4 p-4'>

                {records?.map((item, id) => (
                    <div key={item.id}>
                        <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-white">
                            <Image
                                src={item.avatar}
                                width={100}
                                height={100}
                                alt="image"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                    {item?.first_name} {item?.last_name}
                                </h4>
                                <p className="mb-2 leading-normal">
                                    <span className='font-medium'>Gender-</span>{item?.gender}
                                </p>
                                <p className="mb-2 leading-normal">
                                    <span className='font-medium'>Email-</span>{item?.email}
                                </p>
                                <p className="mb-4 leading-normal">
                                    <span className='font-medium'>Domain</span>{item?.domain}
                                </p>
                                <button className="px-4 py-2 text-sm text-blue-100
                                    bg-blue-500 rounded shadow hover:text-[16px] transition duration-75"
                                    onClick={() => dispatch(addToCart(item))}>
                                    Hire me
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <nav className='my-10' >
                <ul className='flex items-center justify-center gap-2'>
                    <li>
                        <a href='#' onClick={prePage}
                            className='flex items-center justify-center bg-black text-[22px]
                                    py-2 px-4 rounded-md text-white hover:text-gray-400'  >
                            <BiSkipPrevious /> Prev
                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={nextPage}
                            className='flex items-center justify-center bg-black text-[22px]
                                py-2 px-4 rounded-md text-white ml-2 hover:text-gray-400'  >
                            Next<BiSkipNext />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1)
        }
    }

}

export default Card
