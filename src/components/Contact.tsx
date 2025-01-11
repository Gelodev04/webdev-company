import call from "./images/call.png";
import clock from "./images/clock.png";
import location from "./images/location.png";
import mail from "./images/mail.png";

function Contact() {
  const contact = [
    {
      icon: call,
      title: "Phone",
      description: "+1-543-123-4567",
    },
    {
      icon: mail,
      title: "Email",
      description: "sample@gmail.com",
    },
    {
      icon: location,
      title: "Location",
      description: "123 Street, New York, USA",
    },
    {
      icon: clock,
      title: "Hours",
      description: "Mon - Fri 8:00 AM to 5:00 PM",
    },
  ];

  return (
    <div id="contact" className="mx-7 ">
      <div className="flex items-center justify-center space-x-3">
        <span className="flex-grow-0 w-[4rem] h-[2px] rounded-full bg-[#004cff]"></span>
        <h1 className="text-[1.3rem] text-center font-bold tracking-wider text-gray-800 uppercase">
          Contact
        </h1>
        <span className="flex-grow-0 h-[2px] w-[4rem] rounded-full bg-[#004cff]"></span>
      </div>


        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4">
            {contact.map((item, index) => (
                <div
                key={index}
                className="flex flex-col items-center    space-y-2"
                >
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
                <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>

        {/* text area */}
        <div className="mt-10 mx-7">
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#004cff] focus:border-[#004cff] sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#004cff] focus:border-[#004cff] sm:text-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#004cff] focus:border-[#004cff] sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#004cff] hover:bg-[#003bb5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004cff]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
        
    </div>
  );
}

export default Contact;
