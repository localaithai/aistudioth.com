import { Meter } from "@/components/Meter";
import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";
import { modelRows } from "@/lib/rig-data";

const capacityColumns = [
  { key: "gpu32", label: "GPU 32 GB", capacityGb: 32 },
  { key: "unified96", label: "Unified 96 GB", capacityGb: 96 },
  { key: "unified128", label: "Unified 128 GB", capacityGb: 128 },
  { key: "dual128", label: "2x 128 GB", capacityGb: 256 },
] as const;

const memoryGb = (memory: string) =>
  Number(/(\d+)\s*GB/.exec(memory)?.[1] ?? Number.NaN);

export default function ModelsSection() {
  return (
    <section
      id="models"
      className="scroll-mt-16 bg-deck section-pad text-deck-ink"
    >
      <div className="container-wide">
        <Reveal className="mb-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2 text-deck-ink">
              model weight ไม่ใช่ memory ที่ใช้จริงทั้งหมด
            </h2>
            <p className="mt-5 text-lead text-deck-ink-2">
              ตารางนี้เป็นการคำนวณ memory ของ model weights โดยประมาณ ไม่ใช่ผล
              benchmark ที่วัดจริง. Runtime, KV cache, context length, batch size
              และ quantisation format เพิ่ม memory overhead เสมอ
            </p>
          </div>
          <figure className="lg:col-span-5">
            <div className="aspect-[16/10] overflow-hidden rounded-[6px] bg-panel">
              <img
                src={assetUrl("/photography/memory-planning.webp")}
                alt="แรมสองแถว การ์ดจอ และสมุดจดบนโต๊ะ ระหว่างวางแผน memory ของ build"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block size-full object-cover text-transparent"
              />
            </div>
            <figcaption className="mt-3 text-sm text-deck-ink-2">
              ภาพจำลอง · วางแผน memory ก่อนเลือก build
            </figcaption>
          </figure>
        </Reveal>
        <Reveal>
          <table className="w-full border-collapse text-left max-lg:block">
            <caption className="caption-top pb-5 text-left max-lg:block">
              <span className="legend text-deck-ink">VRAM เทียบกับ model</span>
            </caption>
            <thead className="max-lg:sr-only">
              <tr>
                <th
                  scope="col"
                  className="border-b border-deck-line pr-6 pb-3 align-bottom text-legend font-semibold text-deck-ink-2"
                >
                  Model
                </th>
                <th
                  scope="col"
                  className="border-b border-deck-line pr-6 pb-3 align-bottom text-legend font-semibold text-deck-ink-2"
                >
                  Weights
                </th>
                <th
                  scope="col"
                  className="border-b border-deck-line pr-6 pb-3 align-bottom text-legend font-semibold text-deck-ink-2"
                >
                  หน่วยความจำ model ที่คำนวณ
                </th>
                {capacityColumns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className="border-b border-deck-line pr-6 pb-3 align-bottom font-readout text-xl font-bold text-deck-ink"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="max-lg:block">
              {modelRows.map((row) => (
                <tr
                  key={`${row.model}-${row.weights}`}
                  className="border-b border-deck-line max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-6 max-lg:py-8"
                >
                  <th
                    scope="row"
                    className="py-5 pr-6 align-middle font-readout text-[2.25rem] leading-none font-extrabold text-deck-ink max-lg:col-span-2 max-lg:p-0"
                  >
                    {row.model}
                  </th>
                  <td className="py-5 pr-6 align-middle font-readout text-xl font-bold text-deck-ink-2 max-lg:p-0">
                    {row.weights}
                  </td>
                  <td className="py-5 pr-6 align-middle text-base text-deck-ink max-lg:p-0 max-lg:text-right">
                    {row.memory}
                  </td>
                  {capacityColumns.map((column) => {
                    const verdict = row[column.key];
                    const over = verdict.startsWith("ไม่ได้");
                    const gb = memoryGb(row.memory);
                    const lit = over
                      ? 10
                      : Math.min(
                          10,
                          Math.max(
                            1,
                            Math.round((gb / column.capacityGb) * 10),
                          ),
                        );
                    return (
                      <td
                        key={column.key}
                        data-label={column.label}
                        className="py-5 pr-6 align-middle max-lg:p-0 max-lg:before:mb-2 max-lg:before:block max-lg:before:font-readout max-lg:before:text-base max-lg:before:font-bold max-lg:before:text-deck-ink-2 max-lg:before:content-[attr(data-label)]"
                      >
                        {!Number.isNaN(gb) && (
                          <Meter
                            segments={10}
                            lit={lit}
                            over={over}
                            tone="deck"
                          />
                        )}
                        <span
                          className={
                            over
                              ? "mt-2 block text-sm font-semibold text-clip-ink"
                              : "mt-2 block text-sm text-deck-ink"
                          }
                        >
                          {verdict}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-8 max-w-[65ch] text-base text-deck-ink-2">
          ใช้ตารางเพื่อคัด build แรก แล้วส่ง model, context และ runtime
          ที่คุณต้องการมาให้เราตรวจ headroom ก่อนสั่ง build.
        </p>
      </div>
    </section>
  );
}
