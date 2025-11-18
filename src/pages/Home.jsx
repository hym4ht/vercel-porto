import SplitText from '../assets/components/SplitText';

function Home() {
  return (
    <div className="text-white"> 
      
  
      <section id="intro" className="flex items-center justify-center min-h-[calc(100vh-100px)] p-8">
        <div className="text-center">
          <SplitText 
            tag="h1"
            text="PORTFOLIO"
            splitType="chars"
            delay={50}
            className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-landasans font-hype-heavy text-white mb-4"
          />
          
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            A creative space where ideas turn into reality. Explore my projects and get to know more about my passion for development and design.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
          </div>
        </div>
      </section>
    </div>

  );
  
}

export default Home;