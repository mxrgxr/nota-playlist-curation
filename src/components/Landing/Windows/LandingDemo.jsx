import DemoStep from '../DemoStep'
import OAuthButton from '../OAuthButton'

export default function LandingDemo(){
    return (
          <div className="bg-p-500 h-screen flex flex-col justify-center overflow-scroll">
          <div className="flex justify-center">
            <div className="">
              <DemoStep number={1} name="Create" showChevron imgSrc="/create-playlist.png" />
            </div>
            <div className="">
              <DemoStep number={2} name="Filter" showChevron imgSrc="/filter-playlist.png" />
            </div>
            <div className="">
              <DemoStep number={3} name="Add" imgSrc="/add-items.png" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-12">
            <OAuthButton color="bg-a-100"/>
            <div className="flex items-center space-x-2">
              <p className="font-body font-bold text-b-lg text-lt-ntr">Learn more about us</p>
              <img className="w-6 h-6" src="/downward-chevron.svg" alt="Chevron"/>
            </div>
          </div>
        </div>
    );
}