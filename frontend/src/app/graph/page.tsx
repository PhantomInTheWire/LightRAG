"use client";

import KnowledgeGraph from "@/components/graph/KnowledgeGraph";

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-grid-pattern dark:bg-grid-pattern-light">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
              Knowledge Graph Visualization
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore your knowledge connections through this interactive visualization. 
              Drag nodes to rearrange, scroll to zoom, and click nodes to focus.
            </p>
          </div>
          <div className="bg-background/50 backdrop-blur-sm rounded-xl shadow-xl border p-6">
            <KnowledgeGraph />
          </div>
        </div>
      </div>
    </div>
  );
}