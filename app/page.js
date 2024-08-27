'use client'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <Link href='/' color='blue.400' _hover={{ color: 'blue.800' }}>
      About
    </Link>
  );
}
