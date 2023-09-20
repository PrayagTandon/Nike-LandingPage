import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-ull cursor-pointer transition-all hover:-translate-y-2 active:-translate-y-1">
            <img
                src={imgURL}
                alt={name}
                className="w-[280px] h-[280px] "
            />
            <div className="mt-8 flex justify-start items-center gap-2.5">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
                <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
                <p className='mt-2 font-semibold font-montserrat text-coral-red leading-normal text-21x'>{price}</p>
            </div>
        </div>
    )
}

export default PopularProductCard;