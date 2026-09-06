const partners = [
  "INGRAM MICRO",
  "TD SYNNEX",
  "SIS",
  "ASCENTI",
  "EATON",
  "SCHNEIDER",
  "VST ECS",
] as const;

export default function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="apple-section section-white">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-[minmax(0,28rem)_1fr] md:items-end md:gap-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#06c]">Build network</p>
            <h2 id="partners-heading" className="text-4xl font-semibold sm:text-5xl">พาร์ทเนอร์ของ rig ทุกเครื่อง</h2>
          </div>
          <p className="max-w-2xl text-lg">เราเชื่อมสเปกที่คุณเลือกกับเครือข่ายจัดหา ระบบไฟ และโครงสร้างพื้นฐาน เพื่อให้ build ที่ออกแบบไว้ส่งมอบและดูแลต่อได้จริง</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3 lg:grid-cols-7">
          {partners.map((partner) => (
            <li key={partner} className="flex min-h-24 items-center justify-center border-b border-r border-black/[0.08] px-4 text-center text-sm font-semibold tracking-[-0.01em] text-[#1d1d1f]">
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
