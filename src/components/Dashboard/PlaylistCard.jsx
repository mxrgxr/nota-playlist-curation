export default function PlaylistCard({ imgSrc, playlistName }){
    return (
        <div className="">
          <img className="" src={imgSrc} alt={playlistName} />
          <div className="">
            <p className="">{playlistName}</p>
          </div>
        </div>
    );
}