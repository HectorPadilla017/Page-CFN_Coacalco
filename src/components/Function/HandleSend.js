import React, {useState} from 'react'
import axios from 'axios'

const [sent, setSent] = useState(false)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

const HandleSend = async() => {
    setSent(true)
    try {
        await axios.post("/send_mail", {
            name,
            email,
            message,
        })
    } catch (error) {
        console.log(error)
    }
    
}
export default HandleSend
