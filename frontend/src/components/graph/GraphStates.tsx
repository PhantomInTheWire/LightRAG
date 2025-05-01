"use client";

export function LoadingState() {
  return (
    <div className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-background/50 to-background/10 backdrop-blur-lg">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <p className="text-sm text-muted-foreground animate-pulse">Loading graph data...</p>
      </div>
    </div>
  );
}

export function ErrorState({ error }: { error: string }) {
  return (
    <div className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-lg">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex flex-col items-center gap-4 p-6 text-center">
        <div className="rounded-full bg-destructive/10 p-3">
          <svg className="h-6 w-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-sm text-destructive">{error}</p>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-background/50 to-background/10 backdrop-blur-lg">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex flex-col items-center gap-4 p-6 text-center">
        <div className="rounded-full bg-muted/10 p-3">
          <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">No graph data available</p>
      </div>
    </div>
  );
}