/* ProjectDiagram.jsx — small schematics drawn from each project's own description. */

function Frame({ width = 240, children }) {
  return (
    <svg viewBox={`0 0 ${width} 72`} className="project-diagram mt-4 h-16 w-full text-leaf" aria-hidden="true">
      {children}
    </svg>
  );
}

function Node({ x, label }) {
  return (
    <g>
      <circle cx={x} cy="28" r="11" className="fill-linen" stroke="currentColor" strokeWidth="1.25" />
      <text x={x} y="58" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="Inter, sans-serif">
        {label}
      </text>
    </g>
  );
}

function Link({ x1, x2 }) {
  return <line x1={x1 + 12} y1="28" x2={x2 - 12} y2="28" stroke="currentColor" strokeWidth="1" opacity="0.45" />;
}

function Chain({ labels }) {
  const width = Math.max(240, labels.length * 68);
  const gap = (width - 20) / labels.length;
  const start = 10 + gap / 2;
  return (
    <Frame width={width}>
      {labels.map((label, index) => {
        const x = start + index * gap;
        return (
          <g key={label}>
            {index > 0 && <Link x1={start + (index - 1) * gap} x2={x} />}
            <Node x={x} label={label} />
          </g>
        );
      })}
    </Frame>
  );
}

function Hub({ center, spokes }) {
  const points = [
    [48, 22],
    [120, 14],
    [192, 22],
    [120, 52],
  ];
  return (
    <Frame>
      {spokes.map((label, index) => (
        <line
          key={label}
          x1="120"
          y1="32"
          x2={points[index][0]}
          y2={points[index][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
      <circle cx="120" cy="32" r="14" className="fill-linen" stroke="currentColor" strokeWidth="1.25" />
      <text x="120" y="35" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="Inter, sans-serif">
        {center}
      </text>
      {spokes.map((label, index) => (
        <text
          key={label}
          x={points[index][0]}
          y={points[index][1] + (index === 3 ? 14 : -6)}
          textAnchor="middle"
          fill="currentColor"
          fontSize="8"
          fontFamily="Inter, sans-serif"
        >
          {label}
        </text>
      ))}
    </Frame>
  );
}

const diagrams = {
  "Agentic RAG for Financial Analysis": <Chain labels={["Retrieve", "Plan", "Reason", "Execute", "Deliver"]} />,
  PharmaRAG: <Chain labels={["SPL", "Search", "Answer"]} />,
  "Healthcare MCP Server": <Hub center="MCP" spokes={["RxNorm", "FAERS", "Trials", "FHIR"]} />,
  "Pharmacy Ops Assistant": <Chain labels={["RxNorm", "Check", "Advice"]} />,
  "Drug Interaction Checker": <Chain labels={["FHIR", "DrugBank", "Alert"]} />,
};

export default function ProjectDiagram({ name }) {
  return diagrams[name] ?? null;
}
