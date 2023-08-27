import { Link } from "react-router-dom";

export default function DashboardMenuItem() {
    return (
      <div>
        <Link to="/dashboard" className="flex flex-col items-center space-y-2">
          <img src="/dashboard-icon.svg" />
          <p className="font-body font-bold text-b-md text-dk-ntr">Dashboard</p>
        </Link>
      </div>
    );
}