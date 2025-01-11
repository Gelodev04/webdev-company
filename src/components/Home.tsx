import team from './images/team.jpg';

function Firstsection() {
  return (
    <section id='home' className='flex flex-col md:flex-row md:pt-[8rem] items-center md:items-start md:space-x-6 p-4 md:p-8 lg:h-screen lg:justify-center lg:items-center pt-[6rem]'>
      <img src={team} alt="team" className='w-full md:w-1/2 h-auto rounded-lg shadow-lg' />
      <div className='mt-5 md:mt-0 mx-7'>
        <p className='text-[1.8rem] md:text-2xl lg:text-3xl text-gray-800 font-semibold tracking-wide'>
          Bringing Your Digital Vision to Life with Expert Web Development.
        </p>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-700 tracking-wide font-[400] mt-4'>
          Building responsive, scalable, and user-centric websites to help your business thrive online.
        </p>
        <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
          <button className='bg-[#493CFF] w-full md:w-auto text-white py-2 px-4 rounded-full hover:bg-[#2e269c] transition duration-300'>
            Get Started
          </button>
          <button className='bg-transparent border-2 w-full md:w-auto mt-4 md:mt-0 border-[#493CFF] text-[#493CFF] py-2 px-4 rounded-full hover:bg-[#493CFF] hover:text-white transition duration-300'>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default Firstsection;