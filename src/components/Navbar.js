import { useState, useRef } from "react";
import { useOnClickOutside } from "../useOnClickOutside";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
//   console.log(ref.children);
  useOnClickOutside(ref,dropdown, () => setDropdown(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
