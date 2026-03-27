import { forceCenter, forceLink, forceManyBody, forceSimulation } from "d3-force";
import { drag } from "d3-drag";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";

type GraphNode = {
  id: "architect" | "code" | "core" | "qa";
  label: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
};

type GraphLink = {
  source: GraphNode["id"] | GraphNode;
  target: GraphNode["id"] | GraphNode;
};

const BASE_NODES: GraphNode[] = [
  { id: "architect", label: "ARCHITECT_NODE" },
  { id: "code", label: "CODE_SPECIALIST" },
  { id: "core", label: "GroupChat Manager" },
  { id: "qa", label: "QA_VALIDATOR" }
];

const CORE_NODE_ID: GraphNode["id"] = "core";

const LINKS: GraphLink[] = BASE_NODES
  .filter((node) => node.id !== CORE_NODE_ID)
  .map((node) => ({ source: node.id, target: CORE_NODE_ID }));

export default function AgentGraph() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const svg = select(container).select<SVGSVGElement>("svg");
    const nodeSelection = select(container).selectAll<HTMLDivElement, GraphNode>(".graph-node");

    const nodes = BASE_NODES.map((node) => ({ ...node }));
    const links = LINKS.map((link) => ({ ...link }));

    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    const resolveNode = (ref: GraphNode["id"] | GraphNode) =>
      typeof ref === "string" ? nodeById.get(ref) : ref;

    const tick = () => {
      const lineSelection = svg.selectAll<SVGLineElement, GraphLink>("line");

      lineSelection
        .attr("x1", (d) => resolveNode(d.source)?.x ?? 0)
        .attr("y1", (d) => resolveNode(d.source)?.y ?? 0)
        .attr("x2", (d) => resolveNode(d.target)?.x ?? 0)
        .attr("y2", (d) => resolveNode(d.target)?.y ?? 0);

      nodeSelection
        .style("left", (d) => `${(d.x ?? 0) - (d.id === "core" ? 115 : 48)}px`)
        .style("top", (d) => `${(d.y ?? 0) - (d.id === "core" ? 115 : 48)}px`);
    };

    const simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink<GraphNode, GraphLink>(links)
          .id((d) => d.id)
          .distance((link) => (link.source === "qa" || link.target === "qa" ? 165 : 180))
          .strength(0.55)
      )
      .force("charge", forceManyBody().strength(-520))
      .alphaDecay(0.06)
      .on("tick", tick);

    svg.selectAll("line")
      .data(links)
      .join("line")
      .attr("class", "graph-line");

    const setStartingLayout = (width: number, height: number) => {
      const cx = width / 2;
      const cy = height / 2;

      for (const node of nodes) {
        if (node.id === "architect") {
          node.x = cx - 138;
          node.y = cy - 138;
        } else if (node.id === "code") {
          node.x = cx + 138;
          node.y = cy - 138;
        } else if (node.id === "core") {
          node.x = cx;
          node.y = cy;
        } else {
          node.x = cx;
          node.y = cy + 178;
        }

        node.fx = node.x;
        node.fy = node.y;
      }

      simulation.force("center", forceCenter(cx, cy));
      simulation.alpha(0.4).restart();
      tick();
    };

    const dragBehavior = drag<HTMLDivElement, GraphNode>()
      .on("start", (_event, d) => {
        simulation.alphaTarget(0.15).restart();
        d.fx = d.x ?? 0;
        d.fy = d.y ?? 0;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (_event, d) => {
        simulation.alphaTarget(0);
        d.fx = d.x ?? 0;
        d.fy = d.y ?? 0;
      });

    nodeSelection.data(nodes).call(dragBehavior);

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) {
        return;
      }

      svg.attr("width", rect.width).attr("height", rect.height);
      setStartingLayout(rect.width, rect.height);
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      simulation.stop();
    };
  }, []);

  return (
    <div className="center-col draggable-graph" ref={containerRef}>
      <svg className="graph-links" aria-hidden="true" />

      <div className="graph-node node" data-id="architect">ARCHITECT_NODE</div>
      <div className="graph-node node active" data-id="code">CODE_SPECIALIST</div>

      <div className="graph-node core" data-id="core">
        <div className="core-inner">
          <h4>GroupChat Manager</h4>
          <small>DECISION ENGINE ACTIVE</small>
        </div>
      </div>

      <div className="graph-node node bottom" data-id="qa">QA_VALIDATOR</div>
    </div>
  );
}
