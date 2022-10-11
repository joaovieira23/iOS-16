import { FlatList, useWindowDimensions, FlatListProps } from 'react-native';

import notifications from '../../assets/data/notifications';

import NotificationItem from './NotificationItem';

import Animated, { 
    useAnimatedScrollHandler, 
    useSharedValue, 
    withTiming,
    withSpring,
} from 'react-native-reanimated';

const NotificationList = ({ footerVisibility, footerHeight, ...flatListProps }) => {
    const { height } = useWindowDimensions();
    const listVisibility = useSharedValue(1);
    const scrollY = useSharedValue(0);

    const handler = useAnimatedScrollHandler({
        onScroll: (event) => {
            const y = event.contentOffset.y;
            scrollY.value = y;
            if(y < 10) {
                // aqui devemos manter o footer aberto
                footerVisibility.value = withTiming(1);
            } else {
                footerVisibility.value = withTiming(0);
                // feche o footer
            }
        },
        onBeginDrag: (event) => {
            if(listVisibility.value < 1) {
                listVisibility.value = withSpring(1);
            }; 
        },
        onEndDrag: (event) => {
            if(event.contentOffset.y < 0) {
                listVisibility.value =  withTiming(0);
            }
        }
    })

    return (
        <Animated.FlatList
            data={notifications}
            renderItem={({ item, index }) => (
                <NotificationItem 
                    data={item} 
                    index={index} 
                    listVisibility={listVisibility} 
                    scrollY={scrollY}
                    footerHeight={footerHeight}
                />
            )}
            {...flatListProps}
            onScroll={handler}
            scrollEventThrottle={16}
        />
    );
};

export default NotificationList;