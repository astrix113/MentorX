import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src={'/logo.png'} alt='Logo' width={400} height={100}
            className='h-12 py-1 w-auto object-contain'
          />
        </Link>

        <div>

        </div>
      </nav>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

export default Header