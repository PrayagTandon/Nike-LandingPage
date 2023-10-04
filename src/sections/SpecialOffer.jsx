import { offer } from "../assets/images";


const SpecialOffer = () => {
  return (
    <section className="flex justify-center flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Offers-Image"
          width={773}
          height={687}
        />
      </div>
    </section>
  )
};

export default SpecialOffer;
