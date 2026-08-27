import {createContext, useContext, useState, useEffect} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', isDarkTheme);
    }
    useEffect(() => {
        if(isDarkTheme){
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}