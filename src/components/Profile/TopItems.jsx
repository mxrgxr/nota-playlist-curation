export default function TopItems({ topTracks }) {
    return (
      <div>
        <h2 className="">Top Items</h2>
        <ul>
          {topTracks.map((track, index) => (
            <li key={index} className="">
              {track}
            </li>
          ))}
        </ul>
      </div>
    );
}