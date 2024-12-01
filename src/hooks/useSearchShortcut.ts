import { useEffect } from "react";

export const useSearchShortcut = (
  searchInputRef: React.RefObject<HTMLInputElement>
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl + K is pressed
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        // Prevent default browser behavior
        event.preventDefault();

        // Focus on the search input
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    // Add event listener to the document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchInputRef]);
};
