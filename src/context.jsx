import {createContext, useCallback, useContext, useState, useMemo, useEffect} from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
    if (storeDarkMode === null) return prefersDarkMode;
    return storedDarkMode === 'true';
};

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('animal');
    const toggleDarkTheme = useCallback(() => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    }, [isDarkTheme]);
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
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
