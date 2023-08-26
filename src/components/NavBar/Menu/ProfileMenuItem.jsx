export default function DashboardMenuItem(){
    return(
        <div>
            <button className="flex flex-col items-center space-y-2">
                <img src="/profile-icon.svg" />
                <p className="font-body font-bold text-b-md text-dk-ntr">Profile</p>
            </button>
        </div>
    )
}