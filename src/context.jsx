import {createContext, useCallback, useContext, useState, useMemo} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchTerm, setSearchTerm] = useState('animal');
    const toggleDarkTheme = useCallback(() => {
        setIsDarkTheme(!isDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);
    useMemo(() => {
        if(isDarkTheme){
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openSidebar = useCallback(() => {
        setIsSidebarOpen(true);
    }, []);
    const closeSidebar = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);
    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const contextValue = useMemo(() => ({
        isDarkTheme,
        toggleDarkTheme,
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        searchTerm,
        setSearchTerm
    }), [isDarkTheme, toggleDarkTheme, isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal, searchTerm]);
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}