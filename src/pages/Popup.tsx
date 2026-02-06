import Icon from "../components/Icon";
import Nav from "../components/Nav";
import ThemeToggle from "../components/ThemeToggle";

export default function Popup() {
  return (
    <div className="card w-80 shadow-lg">
      <Nav>
        <Icon />
        <ThemeToggle />
      </Nav>
      <div className="card-body rounded-xl text-center">
        <h2 className="card-title text-lg mt-4">Microbreaks</h2>
        <p className="text-sm opacity-70 mb-6">Take regular breaks for better productivity</p>
      </div>
    </div>
  );
}
