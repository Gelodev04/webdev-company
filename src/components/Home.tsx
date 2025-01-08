
import team from './images/team.jpg'

function Firstsection() {
  return (
    <section id='home' className=''>
        <img src={team} alt="team" />
        <div className='mx-7 mt-5'>
        <p className='text-[1.8rem] text-[#2e269c] font-semibold tracking-wide'>Bringing Your Digital Vision to Life with Expert Web Development.</p>
        <p className='text-lg text-gray-700 tracking-wide font-[400]'>Building responsive, scalable, and user-centric websites to help your business thrive online.</p>
        <div className="mt-8">
          <button className='bg-[#493CFF] w-full text-white py-2 px-4 rounded-full mr-4 hover:bg-[#2e269c] transition duration-300'>
            Get Started
          </button>
          <button className='bg-transparent border-2 w-full mt-4 border-[#493CFF] text-[#493CFF] py-2 px-4 rounded-full hover:bg-[#493CFF] hover:text-white transition duration-300'>
            Watch Video
          </button>
        </div>
        </div>  
    </section>
  )
}

export default Firstsection