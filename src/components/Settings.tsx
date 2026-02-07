import { Interval, INTERVAL } from "../common/common";

interface Props {
  interval: Interval | undefined
  onChange: (Interval: Interval) => void
}

export default function Settings({ interval, onChange }: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full h-full flex flex-col items-center justify-center p-4">
        <p className="label mb-2">How often would you like to take a break?</p>
        <div className="join w-full flex justify-between">
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="5"
            aria-label="5 min"
            checked={interval === INTERVAL.FIVE}
            onChange={() => onChange(INTERVAL.FIVE)}
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="10"
            aria-label="10 min"
            checked={interval === INTERVAL.TEN}
            onChange={() => onChange(INTERVAL.TEN)}
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="15"
            aria-label="15 min"
            checked={interval === INTERVAL.FIFTEEN}
            onChange={() => onChange(INTERVAL.FIFTEEN)}
          />
        </div>
      </fieldset>
    </div>
  );
}
