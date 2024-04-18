import "./App.css";
import GetStarted from "./components/getStarted/getStarted";
import Navbar from "./components/navbar/navbar";
import SearchDialog from "./components/searchDialog/searchDialog";

function App() {
    return (
        <>
            <main className={`w-full h-[50vh] flex flex-col justify-between items-center bg-cover bg-no-repeat bg-center relative
                bg-[url(https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-banner-1.jpg)]`}
                >
                <Navbar />
                <SearchDialog />
            </main>
            <div className="w-full h-[15vh]"></div> {/* spacer */}
            <GetStarted />
        </>
    );
}

export default App;
