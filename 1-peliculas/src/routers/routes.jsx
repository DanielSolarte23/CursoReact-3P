import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandigPage from "../pages/LadingPage";
function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandigPage/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;