import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export function useSwipe(
    onSwipeLeft?: any,
    onSwipeRight?: any,
    rangeOffset = 4,
    rangeOffsetY = 200,
) {
    let firstTouch = 0;
    let firstTouchY = 0;

    // set user touch start position
    function onTouchStart(e: any) {
        firstTouch = e.nativeEvent.pageX;
        firstTouchY = e.nativeEvent.pageY;
    }

    // when touch ends check for swipe directions
    function onTouchEnd(e: any) {
        // get touch position and screen size
        const positionX = e.nativeEvent.pageX;
        const positionY = e.nativeEvent.pageY;
        const range = windowWidth / rangeOffset;

        // check if position is growing positively and has reached specified range
        if (
            positionX - firstTouch > range &&
            Math.abs(firstTouchY - positionY) <= rangeOffsetY
        ) {
            onSwipeRight && onSwipeRight();
        }
        // check if position is growing negatively and has reached specified range
        else if (
            firstTouch - positionX > range &&
            Math.abs(firstTouchY - positionY) <= rangeOffsetY
        ) {
            onSwipeLeft && onSwipeLeft();
        }
    }

    return { onTouchStart, onTouchEnd };
}
