'use client';

import { motion } from 'framer-motion';
import AudioControlsDynamic from '@/components/audio-controls-dynamic';
import BackgroundLogo from '@/components/background-logo';
import SectionCard from '@/components/section-card';
import SettingsForm from '@/forms/settings';

export default function Settings() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <BackgroundLogo />

      <div className="max-w-4xl mx-auto space-y-8 mt-16 mb-16">
        <SectionCard title="Settings" className="flex flex-col text-center text-white p-4">
          <SettingsForm />
        </SectionCard>
      </div>

      <div className="max-w-4xl mx-auto mt-16 mb-16">
        <SectionCard title="" className="flex flex-col text-center text-white p-4">
          <AudioControlsDynamic className="space-y-8 flex flex-col items-center justify-center -mt-8" />
        </SectionCard>
      </div>
    </motion.div>
  );
}
