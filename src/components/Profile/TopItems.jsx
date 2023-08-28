export default function TopItems({ topItems, type }) {
    return (
      <div className="bg-p-50 text-dk-ntr p-8 font-body rounded-lg">
        <h2 className="text-t-lg font-header mb-4">Top {type}</h2>
        <ul className="space-y-8 font-body">
          {topItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <img className="w-32"src={item.album ? item.album.images[0].url : item.images[0].url} alt={item.name} />
              {type === "Tracks" ? (
                <div className="ml-4">
                  <h3 className="text-t-md">{item.name}</h3>
                  <p className="text-t-sm">{item.album.name}</p>
                  <p className="text-b-md">{item.artists[0].name}</p>
                </div>
              ) : (
                <h3 className="text-t-md ml-4">{item.name}</h3>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}