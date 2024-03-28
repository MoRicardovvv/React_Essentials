export default function TabButton({ children, isClicked, ...props }) {
  return (
    <li>
      <button className={isClicked? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}