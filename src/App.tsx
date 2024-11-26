import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Index } from "./pages/index/Index";
import { Malaga } from "./pages/malaga/Malaga";
import { About } from "./pages/about/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/malaga" element={<Malaga />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default App
