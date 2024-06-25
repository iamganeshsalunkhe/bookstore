/* eslint-disable react/prop-types */

function Card({item}) { 
    return (
        <>
    <div className="mt-4 my-3 ">
      <div className="card bg-base-100 w-92 shadow-xl m-7 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
        <img src={item.image}
      alt="books" />
        </figure>
        <div className="card-body  ">
            <h2 className="card-title font-bold">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-base">{item.title}</p>
            <div className="card-actions flex justify-between mx-5">
            <div className="cursor-pointer px-2 py-1 rounded-lg hover:text-white hover:bg-pink-500 border-[2px] duration-200"> ${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-lg hover:text-white hover:bg-pink-500 border-[2px] duration-200">Buy Now</div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Card
