export default function TopItems({ topTracks }) {
    return (
      <div className="bg-p-100 text-dk-ntr p-8 font-body">
        <h2 className="text-t-lg font-header">Top Items</h2>
        <ul className="">
          {topTracks.map((track, index) => (
            <li key={index} className="">
              {track}
            </li>
          ))}
        </ul>
      </div>
    );
}