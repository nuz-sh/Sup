import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

    return (
        <BrowserRouter>
            <div className="MainWrapper">
                <Routes>
                    <Route path="/" element={<div>too late to hope</div>} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
