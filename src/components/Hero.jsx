import {HERO_CONTENT} from "../constants";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h3 className="pb-16 text-4xl ont-thin tracking-tight lg:mt-16 lg:text-6xl">
                        Farah Elloumi
                    </h3>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        ICT Engineer - Fresh SUP'COM Graduate
                    </span>
                    <p className="my-2 max-w-xl py-6 font-llight tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img 
                    className="w-72 h-72 lg:w-96 lg:h-96 rounded-lg object-cover"
                    src={profile} 
                    alt="Farah Elloumi" 
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;