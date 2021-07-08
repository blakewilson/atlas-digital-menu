import Image from 'next/image';
export default function Header() {
  return (
    <header className="flex justify-center mb-8">
      <Image src="/logo.png" alt="Logo" width="333" height="204" />
    </header>
  );
}
