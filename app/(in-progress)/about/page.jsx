'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';
import { Navbar, Transition } from '@/layout';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Hello! I am a researcher and media artist exploring the heartbeat behind the screen. My work focuses on how humans form emotional bonds with AI and how technology can foster deeper connections between people. Step into my world, and let\'s explore the future of interaction together.';

export default function About() {
  return (
    <Transition>
      <Navbar />
      <article className='container relative'>
        <Wrapper>
          <div className='basis-full lg:basis-9/12'>
            <Title>
              <ParallaxReveal paragraph={phrase} />
            </Title>
          </div>

          <div className='basis-7/12 lg:basis-3/12'>
            <ParallaxFade>
              <Balancer as='p' className='mt-2 text-base lg:text-lg'>
                Merging research, creativity, and technology to build meaningful connections between humans and AI.
              </Balancer>
            </ParallaxFade>
          </div>

          <motion.div
            whileInView={{ y: '-15%' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className='absolute flex gap-10 items-center right-0 top-3/4 lg:me-10 lg:top-full'
          >
            <div className='text-right'>
              <p className='text-sm font-medium text-muted-foreground'>Profile</p>
              <CldImage
                src='나_g2c8r7'
                className='rounded-full mt-2 object-cover'
                width={80}
                height={80}
                alt='Yoojeong Kim Profile Picture'
              />
            </div>
          </motion.div>
        </Wrapper>
      </article>
    </Transition>
  );
}
