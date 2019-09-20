import { useDispatch, useSelector } from "react-redux";
import { RootState } from "...";
import { increment } from "...";

export function useCounter() {
    const dispatch = useDispatch()
    return {
        ...useSelector(({ counter }: RootState) => ({
            count: counter.count,
        })),
        increment: () => dispatch(increment()),
    }
}