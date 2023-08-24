import Slogan from '../Slogan'
import OAuthButton from '../OAuthButton'
import SpotifyLogo from '../SpotifyLogo'

export default function LandingCTA(){
    return (
        <div className="flex h-screen overflow-scroll">
        <div className="bg-p-800 flex flex-col justify-between w-3/5 p-16">
            <img className="w-64 self-start" src="/logo-lg.svg" alt="Logo" />
            <div className="flex flex-col space-y-8">
            <Slogan />
            <OAuthButton color="bg-a-200"/>
            </div>
            <SpotifyLogo />
        </div>
        <div className="bg-p-100 flex-1 flex items-center justify-center">
            <img className="w-3/5" src="/landing-graphic.svg" alt="Playlist creation" />
        </div>
        <img className="absolute bottom-4 left-1/2" src="/downward-chevron.svg" alt="Chevron"/>
        </div>
    );
}