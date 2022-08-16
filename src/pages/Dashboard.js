import Error from './Error'
import { Logo } from '../components'
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";




const Dashboard = () => {
  return <h1>
    <Error />
    <Logo />
    </h1>
}

export default Dashboard
