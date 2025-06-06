import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AppContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    selectedSection: string;
    changeSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [selectedSection, setSelectedSection] = useState<string>('');

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    const changeSection = (section: string) => {
        setSelectedSection(section);
    };

    const value = {
        isDarkMode,
        toggleDarkMode,
        selectedSection,
        changeSection,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
