export default function PlaylistCard({ imgSrc, playlistName }) {
  return (
    <div className="bg-p-200 rounded-lg p-8 m-4 flex flex-col items-center">
      <div className="">
        <img src={imgSrc} alt={playlistName} />
      </div>
      <div>
        <p className="font-body text-t-md text-dk-ntr mt-8">{playlistName}</p>
      </div>
    </div>
  );
}