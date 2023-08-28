export default function ProfileHeader({ displayName, profilePhoto }) {
    const initial = displayName.charAt(0);
  
    return (
      <div className="flex items-center space-x-4 text-lt-ntr">
        {profilePhoto ? (
          <img className="rounded-full h-32 w-32" src={profilePhoto} alt="Profile" />
        ) : (
          <div
            className="rounded-full h-32 w-32 flex items-center justify-center bg-p-50 text-dk-ntr text-t-lg font-bold"
          >
            {initial}
          </div>
        )}
        <h1 className="font-header text-h-lg">{displayName}</h1>
      </div>
    );
}