import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <div className="mb-14 h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-12">
      <div className="flex h-full items-center justify-between">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <Skeleton className="h-4 w-32" />

          <Skeleton className="h-16 w-[520px]" />

          <div className="flex gap-3">
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-28 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
          </div>

          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-xl" />
            <Skeleton className="h-12 w-40 rounded-xl" />
          </div>
        </div>

        {/* Poster */}
        <Skeleton className="hidden h-[460px] w-[310px] rounded-3xl lg:block" />
      </div>
    </div>
  );
}
