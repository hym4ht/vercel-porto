function Contact() {
  return (
    <div className="min-h-[calc(100vh-128px)] text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Get In Touch
        </h2>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 shadow-lg">
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Your Name</label>
              <input type="text" id="name" className="bg-white/5 border border-white/20 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="John Doe" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Your Email</label>
              <input type="email" id="email" className="bg-white/5 border border-white/20 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="name@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Your Message</label>
              <textarea id="message" rows="4" className="bg-white/5 border border-white/20 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="Let's talk about..."></textarea>
            </div>
            <button type="submit" className="w-full text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;