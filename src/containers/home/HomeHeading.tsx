import homePageImage from "/src/assets/images/home-page-image.png";


export function HomeHeading() {
  return (
   <header className='
   flex sm:flex-row flex-col justify-center items-center text-white font-inter w-full 
   h-90 md:px-16 px-8 py-8 bg-home-headline bg-no-repeat bg-cover aspect-[6]'>
        <section className='flex flex-col justify-center sm:items-start items-center md:w-1/2'>
            <h1 className='font-bold xl:text-4xl lg:text-3xl text-2xl my-3 sm:text-start text-center'>Universal Scalable Algorithm Directory</h1>
            <p className="my-3 xl:text-lg lg:text-base text-sm max-w-xl">
                The ultimate tool for creating and sharing algorithms.
                Easily create and share your own specialized calculators. 
            </p>
            <a href="#" className="px-4 py-3 my-3 rounded-md bg-green-700 hover:bg-green-600 transition-background duration-100 active:outline outline-offset-2 outline-2 outline-green-600">Get started</a>
        </section>
        <section className='flex justify-center items-center w-1/2'>
            <img className="sm:flex hidden lg:h-72 md:h-60 h-40" src={homePageImage} alt="" />
        </section>
   </header>
  )
}
