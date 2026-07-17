import { Skeleton } from "@/components/ui/skeleton";

export default function AnimeCardSkeleton() {
  return (
    <div className="w-[240px] flex-shrink-0">
      <Skeleton className="h-[430px] rounded-3xl" />
    </div>
  );
}
