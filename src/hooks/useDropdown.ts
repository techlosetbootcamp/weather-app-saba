import { useState } from "react";

const useDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => setShowDropdown(true);
  const closeDropdown = () => setShowDropdown(false);

  return { showDropdown, openDropdown, closeDropdown };
};

export default useDropdown;
