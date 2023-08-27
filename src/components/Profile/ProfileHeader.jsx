export default function ProfileHeader({ displayName, profilePhoto }) {
    return (
      <div className="">
        <img className="rounded-full h-16 w-16" src={profilePhoto} alt="Profile" />
        <h1 className="">{displayName}</h1>
      </div>
    );
  }