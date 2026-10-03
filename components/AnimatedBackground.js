export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 h-[40rem] w-[40rem] rounded-full bg-brand-200/30 blur-3xl mix-blend-multiply opacity-70 animate-cloud-1" />
      <div className="absolute top-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl mix-blend-multiply opacity-70 animate-cloud-2" />
      <div className="absolute bottom-0 left-1/4 h-[35rem] w-[35rem] rounded-full bg-sky-100/30 blur-3xl mix-blend-multiply opacity-70 animate-cloud-3" />
    </div>
  )
}
