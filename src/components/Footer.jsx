export default function Footer() {
  return (
    <footer className="bg-uwjsa text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 text-sm">
        <span>&copy; {new Date().getFullYear()} UW Japanese Student Association</span>
      </div>
    </footer>
  );
}
