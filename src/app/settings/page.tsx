import ReturnMainMenu from '@/components/return-main-menu';
import { PageTransition } from '@/components/ui/page-transition';
import Settings from '@/views/settings';

export default function Page() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 text-white">
        <div className="relative container mx-auto px-4 py-16">
          <ReturnMainMenu />
          <Settings />
        </div>
      </div>
    </PageTransition>
  );
}
