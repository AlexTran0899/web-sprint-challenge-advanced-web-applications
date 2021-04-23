import {axiosWithAuth} from "../helpers/axiosWithAuth";

const fetchColor = ()=>{
    return axiosWithAuth()
    .get("/colors")
    .then(res =>{
        console.log(res)
        return res
        
    })
}
export default fetchColor