export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'actvie' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
