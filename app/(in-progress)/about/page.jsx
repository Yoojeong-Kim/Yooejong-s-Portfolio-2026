import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description: 'Hello! I am a researcher and media artist exploring the heartbeat behind the screen. My work focuses on how humans form emotional bonds with AI and how technology can foster deeper connections between people. Step into my world, and let\'s explore the future of interaction together.',
};

export default function About() {
  return (
    <Transition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hello! I am a researcher and media artist exploring the heartbeat behind the screen. My work focuses on how humans form emotional bonds with AI and how technology can foster deeper connections between people. Step into my world, and let&apos;s explore the future of interaction together.
        </p>
      </div>
    </Transition>
  );
}
