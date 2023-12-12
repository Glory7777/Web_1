
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = axios) => {
    // 1. 초기 상태를 설정
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

     // 2. 컴포넌트를 리렌더링하도록 강제하는 trigger 상태와 그 상태를 갱신하는 함수 setTrigger를 설정
    const [trigger, setTrigger] = useState(0);


     // 3. API를 다시 호출하고 상태를 갱신하는 함수 refetch를 설정
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };

     // 4. useEffect 훅을 사용하여 비동기 작업을 수행
    useEffect(() => {
        // trigger 값이 변경될 때마다 API 호출
        axiosInstance(opts).then(data => {
             // API 호출이 성공한 경우 상태를 갱신
            setState({
                ...state,
                loading: false,
                data
            });
        })
        .catch(error => {
              // API 호출이 실패한 경우 상태를 갱신
            setState({ ...state, loading: false, error });
        });
        
    }, [trigger]); // trigger 값이 변경될 때마다 useEffect가 실행됨

     // 5. 상태와 refetch 함수를 반환
    return {...state, refetch};

     // 6. opts.url이 존재하지 않으면 아무것도 반환하지 않음
    if (!opts.url) {
        return;
    }
};


export default useAxios ;