import { useEffect } from 'react';

export default function Popup() {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <div className="card bg-base-100 w-80 shadow-lg">
      <div className="card-body text-center">
        <div className="avatar placeholder">
          <div className="w-16 h-16 rounded-full bg-neutral text-neutral-content">
            <span className="text-2xl">☕</span>
          </div>
        </div>
        <h2 className="card-title text-lg mt-4">Microbreaks</h2>
        <p className="text-sm opacity-70 mb-6">Take regular breaks for better productivity</p>
        <div className="card-actions justify-center gap-2">
          <button className="btn btn-primary">Start Break</button>
          <button className="btn btn-ghost btn-sm">⚙️</button>
        </div>
      </div>
    </div>
  );
}
