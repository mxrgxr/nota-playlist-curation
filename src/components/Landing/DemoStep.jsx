export default function DemoStep({ number, name, showChevron, imgSrc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between">
        <div className="bg-lt-ntr text-p-900 font-header text-h-lg font-bold w-24 h-24 rounded-full flex items-center justify-center">
          {number}
        </div>
        <p className="text-lt-ntr font-header font-bold text-t-lg">{name}</p>
        {showChevron && (
          <img className="w-6 h-6" src="/right-chevron.svg" alt="Chevron" />
        )}
      </div>
      <div className="p-4">
        <img src={imgSrc} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}