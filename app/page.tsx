'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRight as ArrowRightIcon } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <Container component="main" sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', p: 6 }}>
      <Box sx={{ display: 'flex', height: { xs: '80px', md: '208px' }, alignItems: 'flex-end', bgcolor: 'blue.500', p: 4, borderRadius: 2 }}>
        <AcmeLogo />
      </Box>
      <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, bgcolor: 'grey.50', p: { xs: 6, md: 10 }, borderRadius: 2 }}>
          <Box
            sx={{
              width: 0,
              height: 0,
              borderBottom: '30px solid black',
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
            }}
          />
          <Typography className={lusitana.className} variant="h4" component="p" color="textPrimary" sx={{ fontSize: { xs: '1.25rem', md: '2rem' }, lineHeight: { md: 'normal' } }}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <Link href="https://nextjs.org/learn/" passHref>
              <a style={{ color: '#3b82f6' }}>Next.js Learn Course</a>
            </Link>
            , brought to you by Vercel.
          </Typography>
          <Link href="/login" passHref>
            <Button variant="contained" color="primary" endIcon={<ArrowRightIcon />} sx={{ alignSelf: 'flex-start', px: 6, py: 3, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Log in
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 6, width: { xs: '100%', md: '60%' }, px: { md: 28 }, py: { md: 12 } }}>
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </Box>
      </Box>
    </Container>
  );
}
