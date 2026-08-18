export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] grid-bg" aria-hidden="true" />
  );
}

export function RadialGradient({ position = "center" }: { position?: "center" | "top-right" }) {
  const styles =
    position === "top-right"
      ? "radial-gradient(circle at top right, rgba(0, 30, 106, 0.15) 0%, transparent 60%)"
      : "radial-gradient(circle at center, rgba(21, 87, 255, 0.05) 0%, transparent 70%)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1]"
      style={{ background: styles }}
      aria-hidden="true"
    />
  );
}

export function BlueprintGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] blueprint-grid" aria-hidden="true" />
  );
}
