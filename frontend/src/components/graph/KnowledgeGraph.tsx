"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";
import { GraphData, GraphResponse } from "@/types/graph";
import { graphConfig } from "./graph.config";
import { LoadingState, ErrorState, EmptyState } from "./GraphStates";

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => <LoadingState />,
});


export default function KnowledgeGraph() {
  const { theme } = useTheme();
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fg = useRef<ForceGraph2D>();

  const handleNodeClick = useCallback((node: any) => {
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y);
    if (fg.current) {
      fg.current.centerAt(node.x, node.y, 1000);
      fg.current.zoom(2, 1000);
    }
  }, []);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        // const response = await fetch("http://localhost:8000/api/v1/graph", {
        //   headers: {
        //     'accept': 'application/json'
        //   }
        // });
        // const data: GraphResponse = await response.json();

        // Mock data
        const response = await fetch('/response.json');
        const data: GraphResponse = await response.json();

        if (data.status === "success" && data.data) {
          setGraphData(data.data);
        } else {
          setError(data.message || "Failed to fetch graph data");
        }
      } catch (err) {
        setError("Error fetching graph data");
      } finally {
        setLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!graphData) return <EmptyState />;

  const graphDataFormatted = {
    nodes: graphData.nodes.map((node) => ({
      id: node.id,
      label: node.labels[0] || "",
      ...node.properties,
    })),
    links: graphData.relationships.map((rel) => ({
      source: rel.source,
      target: rel.target,
      type: rel.type,
      ...rel.properties,
    })),
  };



  return (
    <div className="h-[600px] w-full border rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      <ForceGraph2D
        graphData={graphDataFormatted}
        nodeLabel={(node: any) => `${node.label}: ${node.name || node.id}`}
        linkLabel={(link: any) => link.type}
        nodeAutoColorBy="label"
        linkDirectionalArrowLength={graphConfig.link.arrowLength}
        linkDirectionalArrowRelPos={graphConfig.link.arrowPosition}
        nodeRelSize={graphConfig.node.relSize}
        linkWidth={graphConfig.link.width}
        linkColor={() => theme === 'dark' ? graphConfig.colors.link.dark : graphConfig.colors.link.light}
        backgroundColor={theme === 'dark' ? '#1a1b1e' : '#ffffff'}
        nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
          const label = `${node.label}: ${node.name || node.id}`;
          const fontSize = Math.max(graphConfig.node.fontSize/globalScale, graphConfig.node.minFontSize);
          const nodeR = Math.max(graphConfig.node.radius/globalScale, graphConfig.node.minRadius);
          
          ctx.beginPath();
          ctx.fillStyle = node.color;
          ctx.arc(node.x, node.y, nodeR, 0, 2 * Math.PI);
          ctx.fill();
          
          ctx.strokeStyle = theme === 'dark' ? graphConfig.colors.nodeBorder.dark : graphConfig.colors.nodeBorder.light;
          ctx.lineWidth = graphConfig.link.width;
          ctx.stroke();
          
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth + 8, fontSize + 4].map(n => n + nodeR);
          
          ctx.fillStyle = theme === 'dark' ? graphConfig.colors.labelBackground.dark : graphConfig.colors.labelBackground.light;
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y + nodeR + 2,
            bckgDimensions[0],
            bckgDimensions[1]
          );
          
          ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = theme === 'dark' ? graphConfig.colors.text.dark : graphConfig.colors.text.light;
          ctx.fillText(label, node.x, node.y + nodeR + fontSize/2 + 4);
        }}
        cooldownTicks={graphConfig.physics.cooldownTicks}
        d3AlphaDecay={graphConfig.physics.alphaDecay}
        d3VelocityDecay={graphConfig.physics.velocityDecay}
        d3Force={'charge', graphConfig.physics.chargeStrength}
        onNodeDragEnd={(node: any) => {
          node.fx = node.x;
          node.fy = node.y;
        }}
        onNodeHover={(node: any) => {
          if (fg.current) {
            fg.current.nodeColor((n: any) => n === node ? node.color : '#666666');
            fg.current.linkWidth((link: any) => {
              return link.source === node || link.target === node ? graphConfig.link.hoverWidth : graphConfig.link.width;
            });
          }
        }}
      />
    </div>
  );
}