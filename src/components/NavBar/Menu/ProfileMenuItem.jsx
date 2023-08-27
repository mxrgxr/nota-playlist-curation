import { Link } from "react-router-dom";

export default function ProfileMenuItem() {
    return (
      <div>
        <Link to="/profile" className="flex flex-col items-center space-y-2">
          <img src="/profile-icon.svg" />
          <p className="font-body font-bold text-b-md text-dk-ntr">Profile</p>
        </Link>
      </div>
    );
}