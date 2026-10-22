/**
 * Decorative background layer — slow-drifting shapes behind the whole page.
 *
 * Solid fills and hairline outlines only: no gradient stops, no tinted
 * shadows. The motion is pure CSS keyframes, so this stays a server
 * component and costs no client JavaScript.
 */
export default function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft orbs — solid fills, blurred for depth. */}
      <div className="shape shape-drift-a absolute -left-64 -top-64 h-[46rem] w-[46rem] rounded-full bg-orb-deep opacity-70 blur-[140px]" />
      <div className="shape shape-drift-b absolute -right-48 top-1/4 h-[38rem] w-[38rem] rounded-full bg-orb-light opacity-25 blur-[150px]" />
      <div className="shape shape-drift-c absolute bottom-[-20rem] left-1/4 h-[34rem] w-[34rem] rounded-full bg-white/[0.05] blur-[130px]" />

      {/* Hairline rings — geometry, not colour. */}
      <div className="shape shape-spin absolute left-[6%] top-[10%] h-[30rem] w-[30rem] rounded-full border border-white/[0.07]" />
      <div className="shape shape-drift-d absolute right-[7%] bottom-[6%] h-[22rem] w-[22rem] rounded-full border border-white/[0.06]" />
      <div className="shape shape-drift-e absolute left-[36%] top-[64%] h-[13rem] w-[13rem] rounded-full border border-white/[0.08]" />
    </div>
  );
}
