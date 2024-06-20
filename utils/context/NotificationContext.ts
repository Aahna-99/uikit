import React from 'react';

export interface INotificationContext {
    subscribeNotifications: () => void;
    desubscribeNotifications: () => void;
}

const DefaultEmptyNotificationProvider: INotificationContext = {
    subscribeNotifications: () => {},
    desubscribeNotifications: () => {},
};

export const NotificationContext: React.Context<INotificationContext> =
    React.createContext(DefaultEmptyNotificationProvider);
