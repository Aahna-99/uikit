import { CommonActions } from '@react-navigation/native';
import * as React from 'react';
import retry from 'retry';

export const NavigationRef: any = React.createRef();

/*eslint-disable*/
export function navigate(name: string, params: object) {
    navRetry(() => {
        NavigationRef.current?.navigate(name, params);
    });
}
/*eslint-enable*/

export function dispatch(index: number, name: string, params: object = {}) {
    navRetry(() => {
        NavigationRef.current?.dispatch(
            CommonActions.reset({
                index,
                routes: [{ name, params }],
            }),
        );
    });
}

/*
 This function is to retry the navigation when the NavigaitonRef component didn't finish
 to render yet. This might happen for example when the app is killed and a notificaiton
 is received. This snipet was adapted from this github issue of react-navigation component:
    https://github.com/react-navigation/react-navigation/issues/5685

 this fix is for this issue reported in jira: https://engagedly.atlassian.net/browse/EMD-800
*/
function navRetry(navFunction: () => void) {
    const operation = retry.operation({
        retries: 7,
        minTimeout: 300,
        maxTimeout: 2000,
    });
    operation.attempt((curentAttempt: number) => {
        if (!NavigationRef.current) {
            if (!operation.retry(new Error('Missing navigator ref'))) {
                console.log('ERROR DURING NOTIFICATION REDIRECTION');
            }
            console.log(
                `Trying to execute navigatoin from NavigationRef - Attempt: ${curentAttempt}`,
            );
            return;
        }
        navFunction();
    });
}
