export interface GraphNode {
  id: number;
  labels: string[];
  properties: Record<string, any>;
}

export interface GraphRelationship {
  id: number;
  type: string;
  properties: Record<string, any>;
  source: number;
  target: number;
}

export interface GraphData {
  nodes: GraphNode[];
  relationships: GraphRelationship[];
}

export interface GraphResponse {
  status: string;
  data?: GraphData;
  message?: string;
}