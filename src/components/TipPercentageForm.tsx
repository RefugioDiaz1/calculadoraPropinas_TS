const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm() {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <div></div>
      <form>
        {tipOptions.map(tip => (
        <div>
            <label htmlFor="">{tip.label}</label>
        </div>
        ))}
        
      </form>
    </div>
  );
}
