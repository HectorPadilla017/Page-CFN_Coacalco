import { useEffect, useState } from 'react'
import SliderActivities from '../Pages/Home/SliderActivities/SliderActivities'
import axios from 'axios'

function Api() {

    const [act, setAct] = useState([])
    
    useEffect(() => {
        // if (act === 0) {
            ActivitiesApi()
        // }
    }, [])
    async function ActivitiesApi (){
        const res = await fetch('https://cfn.org.mx/database/')
        const resJson = await res.json()
        setAct(resJson)
        // try {
        // } catch (error) {
        //     console.log(error)
        // }
        
    }
    // console.log(act)
    return (
        <SliderActivities act={act}/>
    )
}
export default Api

// const ActivitiesApi = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(res)
    // setAct(res.data)
    // try {
    // } catch (error) {
    //     console.log(error)
    // }
//     return (res.data)
// }
// export default ActivitiesApi()

// https://jsonplaceholder.typicode.com/users