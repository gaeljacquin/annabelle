'use client';

import { motion } from 'framer-motion';
import AudioControlsDynamic from '@/components/audio-controls-dynamic';
import BackgroundLogo from '@/components/background-logo';
import Footer from '@/components/footer';
import SectionCard from '@/components/section-card';

// import { Separator } from '@/components/ui/separator';

export default function HowToPlay() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <BackgroundLogo />

        <div className="max-w-4xl mx-auto space-y-8 mt-16 mb-16 relative z-10">
          <SectionCard title="How to Play" className="flex flex-col text-center text-white p-4">
            <h1 className="text-xl font-bold mb-2 underline">Gameplay</h1>

            <ul className="list-decimal list-inside space-y-5 text-white text-sm sm:text-md text-start">
              <li>
                <span>Build Poker Hands</span>
                <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                  <li>
                    Drag cards from your hand to any empty cell in the grid.
                    <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                      <li>
                        5 cards in <em>Anna</em> mode.
                      </li>
                      <li>
                        6 cards in <em>Belle</em> mode.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Arrange cards to form poker hands.
                    <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                      <li>The order of cards within a hand doesn't matter.</li>
                      <li>Scroll down to view examples of poker hands.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Discard: </span>Once you're satisfied with your hand
                placements, click "Discard".
                <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                  <li>The remaining card in your hand is moved to the discard pile.</li>
                  <li>A new set of cards is dealt to your hand.</li>
                  <li>Cards from previous deals cannot be moved.</li>
                </ul>
              </li>
              <li>Repeat steps 1 & 2 until the entire grid is filled.</li>
            </ul>

            <h2 className="text-xl font-bold mt-7 mb-2 underline">Extra</h2>
            <ul className="list-[square] list-inside space-y-5 text-white text-sm sm:text-md text-start">
              <li>
                You may earn additional points by forming poker hands using:
                <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                  <li>Cards from the discard pile &rarr; Discard Bonus.</li>
                  <li>
                    Cards in the corners (and center in <em>Belle</em> mode) of the grid &rarr;
                    Special Bonus.
                  </li>
                </ul>
              </li>
              <li>
                You must first score a certain number of poker hands ("One Pair" or better) within
                the grid.{' '}
                <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-md text-start ml-7 mt-2">
                  <li>
                    The required number of poker hands varies depending on the bonus type and game
                    mode.
                  </li>
                </ul>
              </li>
              <li>Try to get both bonuses in one game for an even greater challenge!</li>
            </ul>

            {/* <Separator className="mt-12" /> */}
          </SectionCard>
        </div>
        <Footer />
      </motion.div>
      <AudioControlsDynamic />
    </>
  );
}
