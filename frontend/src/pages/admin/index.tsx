import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <AdminLayout title="Admin - TGC">
      <h2 className="text-lg mb-6">Dashboard</h2>
      <p>Statistiques bientot disponibles ici...</p>
      <Link href="/admin/users" className="button logo link-button">
            <span className="mobile-short-label">TGC</span>
            <span className="desktop-long-label text-xl">THE GOOD CORNER</span>
          </Link>
    </AdminLayout>
  );
}
