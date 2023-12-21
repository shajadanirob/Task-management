import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="">
   

    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
     
      <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
    
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
   
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 className="mb-8 text-center text-xl font-bold text-white sm:text-xl md:mb-12 md:text-3xl">Experience the smooth flow of productivity. TaskFlow simplifies task management, making teamwork and project coordination a breeze.</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Let’s Explore</Link>
        </div>
      </div>
      
    </section>
  </div>
</div>
        </div>
    );
};

export default Banner;