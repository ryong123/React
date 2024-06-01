export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'actvie' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
