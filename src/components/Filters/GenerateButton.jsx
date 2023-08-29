export default function GenerateButton({ onClick }) {
    return(
        <div>
            <button
                className="flex items-center bg-a-200 font-body text-btn-lg text-dk-ntr px-16 py-4 rounded-lg font-bold hover:bg-a-100 space-x-4"
                onClick={onClick}
            >
                Generate
            </button>
        </div>
    )
}