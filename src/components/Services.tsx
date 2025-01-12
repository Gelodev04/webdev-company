import './style/Services.css'

function Services() {
  return (
    <section id='services' className='mx-7   pt-5 lg:min-h-screen '>
      <div className="flex items-center justify-center space-x-3 ">
        <span className="flex-grow-0 w-[4rem] h-[2px] rounded-full bg-[#004cff]"></span>
        <h1 className="text-[1.3rem] text-center font-bold tracking-wider text-gray-800 uppercase">
          services
        </h1>
        <span className="flex-grow-0 h-[2px] w-[4rem] rounded-full bg-[#004cff]"></span>
      </div>

      <p className='text-center pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint accusantium consequatur autem officia laboriosam vitae maiores perspiciatis?</p>

      <div className="text-center flex flex-col gap-5 mt-5 items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-[5rem]">
        {[
          {
            title: 'Title 1',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          },
          {
            title: 'Title 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
          },
          {
            title: 'Title 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            title: 'Title 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }
        ].map((service, index) => (
          <div key={index} className="mt-5 h-[400px] w-[400px] containerStyle group md:w-auto flex flex-col justify-center items-center rounded-lg p-10 lg:h-[500px]">
            <h1 className="font-semibold text-[1.8rem] text-gray-800 group-hover:text-gray-300">{service.title}</h1>
            <p className="text-gray-800 group-hover:text-gray-300">{service.description}</p>
            <button className="mt-2 px-4 py-2 font-semibold text-[#493CFF] rounded-md flex items-center group-hover:text-white">
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services