import { cn } from "@/lib/cn";

type Row = {
  name: string;
  price: string;
  unit?: string;
  length: string;
  format: string;
  best: string;
  featured?: boolean;
};

const rows: Row[] = [
  {
    name: "Private Sunset Cruise",
    price: "$145",
    unit: "for two",
    length: "2 hours",
    format: "Guided sail",
    best: "A date, a gift, a celebration",
  },
  {
    name: "Introduction to Sailing",
    price: "$135",
    length: "2.5 hours",
    format: "One on-water lesson",
    best: "Testing the waters",
  },
  {
    name: "Learn to Sail — Semi-Private",
    price: "$450",
    length: "19 hours",
    format: "Classroom, dock & water",
    best: "Becoming a real sailor",
    featured: true,
  },
  {
    name: "Learn to Sail — Private",
    price: "$675",
    unit: "$1,000 for two",
    length: "19 hours",
    format: "One-on-one",
    best: "Learning at your own pace",
  },
  {
    name: "Individual Private Lessons",
    price: "$60",
    unit: "/ hour",
    length: "3-hour minimum",
    format: "Refresher",
    best: "Experienced sailors brushing up",
  },
];

const th = "px-5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-[0.12em] text-fg-muted";
const td = "px-5 py-5 align-top";

export function PriceTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[780px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line bg-panel">
            <th className={th}>Option</th>
            <th className={th}>Price</th>
            <th className={th}>Length</th>
            <th className={th}>Format</th>
            <th className={th}>Best for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.name}
              className={cn(
                "border-b border-line last:border-b-0",
                r.featured && "bg-accent/[0.06]"
              )}
            >
              <td className={td}>
                <span className="font-medium text-fg">{r.name}</span>
                {r.featured && (
                  <span className="ml-2.5 rounded-full bg-accent px-2 py-0.5 align-middle font-sans text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-on-accent">
                    Popular
                  </span>
                )}
              </td>
              <td className={td}>
                <span className="font-display text-2xl tnum text-fg">{r.price}</span>
                {r.unit && <span className="ml-1.5 text-sm text-fg-muted">{r.unit}</span>}
              </td>
              <td className={cn(td, "text-fg-muted")}>{r.length}</td>
              <td className={cn(td, "text-fg-muted")}>{r.format}</td>
              <td className={cn(td, "text-fg-muted")}>{r.best}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
