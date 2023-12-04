import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    // Math.max(파라미터 1, 파라미터 2) : 인자1과 인자2 중 큰 값을 리턴  

    return [ count, increaseCount, decreaseCount];
}

export default useCounter;