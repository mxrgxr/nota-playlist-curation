export default function ProfileHeader({ displayName, profilePhoto }) {
    return (
      <div className="flex items-center space-x-4 text-lt-ntr">
        <img className="rounded-full h-32 w-32" src={profilePhoto} alt="Profile" />
        <h1 className="font-header text-h-lg">{displayName}</h1>
      </div>
    );
}