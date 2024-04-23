import Navbar from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <main className="h-full pt-40">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
