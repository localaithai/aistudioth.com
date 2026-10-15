export type BuildTier = {
  name: string;
  hardware: string;
  memory: string;
  systemMemory: string;
  storage: string;
  whatRuns: string;
  note?: string;
};

export const buildTiers: BuildTier[] = [
  {
    name: "NVIDIA DGX Spark",
    hardware: "NVIDIA Blackwell GPU",
    memory: "128 GB unified system memory",
    systemMemory: "ใช้ร่วมกับ GPU แบบ unified memory",
    storage: "4 TB NVMe",
    whatRuns:
      "จุดตั้งต้นสำหรับ local inference ระดับ model weights สูงสุด 200B โดย context length, runtime และ quantisation ยังกำหนดผลที่ใช้งานได้จริง.",
    note: "DGX และ NVIDIA เป็นชื่อผลิตภัณฑ์ภายใน build ของเรา ไม่ใช่อัตลักษณ์หรือการอ้างสถานะตัวแทนจำหน่ายที่ได้รับอนุญาต.",
  },
  {
    name: "2x Spark",
    hardware: "NVIDIA DGX Spark สองเครื่อง",
    memory: "2x 128 GB unified memory",
    systemMemory: "กระจายข้ามสองระบบ",
    storage: "2x 4 TB NVMe",
    whatRuns:
      "สำหรับ distributed local inference รวมถึง model-weight class สูงสุด 405B เมื่อ software stack และ workload เหมาะกับการใช้สองระบบ.",
    note: "DGX และ NVIDIA เป็นชื่อผลิตภัณฑ์ภายใน build ของเรา ไม่ใช่อัตลักษณ์หรือการอ้างสถานะตัวแทนจำหน่ายที่ได้รับอนุญาต.",
  },
  {
    name: "RTX 5090 workstation",
    hardware: "NVIDIA GeForce RTX 5090",
    memory: "32 GB GDDR7",
    systemMemory: "กำหนดตาม workload และขยายได้ตาม build",
    storage: "NVMe storage ที่กำหนดตาม build",
    whatRuns:
      "single-GPU build สำหรับ model ขนาดกะทัดรัด, development loop, embeddings, vision workload และ model ที่ quantise แล้วเหลือ runtime headroom พอ.",
  },
  {
    name: "Mac Studio Ultra",
    hardware: "Apple M5 Ultra",
    memory: "96 GB unified memory, configurable to 256 GB or 512 GB",
    systemMemory: "Unified memory ที่ CPU และ GPU ใช้ร่วมกัน",
    storage: "1 TB SSD, configurable to 2 TB, 4 TB, 8 TB, or 16 TB",
    whatRuns:
      "ตัวเลือก desk-side ที่เงียบสำหรับ developer สาย macOS กำหนด unified memory และ storage จาก model, tools และ datasets ที่จะเก็บในเครื่อง.",
  },
];

export type ModelRow = {
  model: string;
  weights: string;
  memory: string;
  gpu32: string;
  unified96: string;
  unified128: string;
  dual128: string;
};

export const modelRows: ModelRow[] = [
  { model: "8B", weights: "BF16", memory: "ประมาณ 16 GB", gpu32: "ได้, เหลือพื้นที่ให้ runtime", unified96: "ได้", unified128: "ได้", dual128: "ได้" },
  { model: "14B", weights: "Q8", memory: "ประมาณ 14 GB", gpu32: "ได้, เหลือพื้นที่ให้ runtime", unified96: "ได้", unified128: "ได้", dual128: "ได้" },
  { model: "32B", weights: "Q4", memory: "ประมาณ 18 GB", gpu32: "พอได้, context จำกัด", unified96: "ได้", unified128: "ได้", dual128: "ได้" },
  { model: "70B", weights: "Q4", memory: "ประมาณ 40 GB", gpu32: "ไม่ได้", unified96: "ได้, ต้องเผื่อ headroom", unified128: "ได้", dual128: "ได้" },
  { model: "70B", weights: "Q8", memory: "ประมาณ 70 GB", gpu32: "ไม่ได้", unified96: "พอได้, context จำกัด", unified128: "ได้, ต้องเผื่อ headroom", dual128: "ได้" },
  { model: "120B", weights: "Q4", memory: "ประมาณ 65 GB", gpu32: "ไม่ได้", unified96: "พอได้, context จำกัด", unified128: "ได้, ต้องเผื่อ headroom", dual128: "ได้" },
  { model: "200B", weights: "Q4", memory: "ประมาณ 110 GB", gpu32: "ไม่ได้", unified96: "ไม่ได้", unified128: "พอได้, context จำกัด", dual128: "ได้" },
  { model: "405B", weights: "Q4", memory: "ประมาณ 220 GB", gpu32: "ไม่ได้", unified96: "ไม่ได้", unified128: "ไม่ได้", dual128: "เฉพาะ distributed setup" },
];
