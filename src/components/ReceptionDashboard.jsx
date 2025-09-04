// components/ReceptionDashboard.jsx
import { useAuth } from "../context/AuthContext";
export default function ReceptionDashboard() {
  const { user } = useAuth();
  return <div>🛎️ Reception Dashboard (coming soon)</div>;
}