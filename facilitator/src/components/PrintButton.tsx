"use client";

export default function PrintButton({ label = "🖨 Print" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-md bg-eap px-4 py-2.5 text-sm font-medium text-white hover:bg-eap-dark"
    >
      {label}
    </button>
  );
}
