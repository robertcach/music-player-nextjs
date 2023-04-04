import NavBar from '@/components/NavBar/NavBar';

export default function Home() {
  return (
    <div className="flex">
      <header className="w-2/12">
        <NavBar />
      </header>
      <main className="bg-[#1F1F22] h-screen w-10/12">
        <p className="text-white">Music player</p>
      </main>
    </div>
  );
}
