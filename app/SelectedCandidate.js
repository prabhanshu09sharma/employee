// 'use client';
// import React from 'react'
// import Image from 'next/image'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeItem } from './GlobalRedux/features/cart/cartSlice'
// import { AiFillDelete } from 'react-icons/ai'


// const SelectedCandidate = () => {
//     const { cart } = useSelector((state) => state.allCart);
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h1 className='flex items-center justify-center m-10 text-[30px] font-bold '>Selected candidate</h1>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

//                 {cart?.map((data) => (
//                     <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto" key={data.id}>
//                         <div className='flex justify-between'>
//                             <Image width={70} height={70} src={data.avatar} alt="Avatar" />
//                             <AiFillDelete className='m-5 text-[20px] hover:text-[22px]'
//                                 onClick={() => dispatch(removeItem(data.id))} />
//                         </div>
//                         <div className="px-6 py-4">
//                             <div className="font-bold text-xl mb-2">{data.first_name}</div>
//                             <p className="text-gray-700 text-base">
//                                 Email-{data.email}
//                             </p>
//                         </div>
//                         <div className="px-6 pt-4 pb-2">
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1
//                                 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                                 Gender-{data.gender}
//                             </span>
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1
//                                 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                                 Domain-{data.domain}
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SelectedCandidate