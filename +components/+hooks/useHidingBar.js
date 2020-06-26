import { useState, useCallback } from "react";

export const useHidingBar = (showOffset, hideOffset) => {
  const [isBarVisible, setIsBarVisible] = useState(true);

  const onScroll = useCallback(
    (e) => {
      const yOffset = e.nativeEvent.contentOffset.y;
      if (yOffset > showOffset && isBarVisible) {
        setIsBarVisible(false);
        return;
      }

      if (yOffset < hideOffset && !isBarVisible) {
        setIsBarVisible(true);
      }
    },
    [setIsBarVisible, isBarVisible]
  );

  return [isBarVisible, onScroll];
};
