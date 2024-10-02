import './globals.css';
import { Suspense } from 'react';
import LoadTimeTracker from '@/components/LoadTimeTracker';
import Search from '@/components/Search';
import ProjectInfo from '@/components/ProjectInfo';
import Tabs, { TabsSkeleton } from '@/components/Tabs';
import Skeleton from '@/components/ui/Skeleton';
import { getCategories } from '@/data/category';
import { getTodosOverview } from '@/data/todo';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { cn } from '@/utils/cn';
import ToggleButton from '@/components/ui/ToggleButton';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata: Metadata = {
  description: 'Next.js 15 Filter List',
  title: 'Next.js 15 filtering list example using modern React features',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const todosOverview = await getTodosOverview();
  // const categories = await getCategories();

  // const [todosOverview, categories] = await Promise.all([getTodosOverview(), getCategories()]);

  const categories = getCategories();
  const todosOverview = getTodosOverview();

  return (
    <html lang="en">
      <body className={cn(GeistSans.className, 'flex flex-col px-4 py-16 sm:px-16 xl:px-48')}>
        <div className="flex flex-col gap-6">
          <h1>Project information</h1>
          <ProjectInfo />
        </div>
        <div className="group flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2>Task list</h2>
            <Suspense fallback={<TabsSkeleton />}>
              <Tabs todosOverviewPromise={todosOverview} />
            </Suspense>
          </div>
          <Suspense fallback={<ToggleButton disabled>Loading...</ToggleButton>}>
            <CategoryFilter categoriesPromise={categories} />
          </Suspense>
          <Suspense>
            <Search />
          </Suspense>
          <Suspense fallback={<Skeleton />}>{children}</Suspense>
        </div>
        <LoadTimeTracker />
      </body>
    </html>
  );
}
