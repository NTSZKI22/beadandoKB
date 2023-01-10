import { ReactDOM } from "react"
import Show from './components/Show'

const app = document.getElementById("example")
if(app){
    const root = ReactDOM.createRoot(app)
    root.render(<Show></Show>)
}