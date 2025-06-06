import { useEffect } from "react";

export default function SearchLogic({ allEvents, userInput, setSearchResult }) {
  useEffect(() => {
    if (userInput.trim() === "") {
      setSearchResult(allEvents);
    } else {
      const filtered = allEvents.filter((event) =>
        event.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setSearchResult(filtered);
    }
  }, [userInput, allEvents, setSearchResult]);

  return null;
}
