import { useDispatch } from "react-redux"
import { AppDispatch } from "../Redux/store"

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch
