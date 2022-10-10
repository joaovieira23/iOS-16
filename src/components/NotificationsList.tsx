import { FlatList, useWindowDimensions, FlatListProps } from 'react-native';

import notifications from '../../assets/data/notifications';

import NotificationItem from './NotificationItem';

import Animated, { useAnimatedScrollHandler, withTiming } from 'react-native-reanimated';

const NotificationList = ({ footerVisibility, ...flatListProps }) => {
    const { height } = useWindowDimensions();

    const handler = useAnimatedScrollHandler({
        onScroll: (event) => {
            const y = event.contentOffset.y;

            if(y < 10) {
                // aqui devemos manter o footer aberto
                footerVisibility.value = withTiming(1, {duration: 1000});
            } else {
                footerVisibility.value = withTiming(0, {duration: 1000});
                // feche o footer
            }
        }
    })

    return (
        <Animated.FlatList
            data={notifications}
            renderItem={({ item, index }) => (
                <NotificationItem data={item} index={index} />
            )}
            {...flatListProps}
            onScroll={handler}
            scrollEventThrottle={16}
        />
    );
};

export default NotificationList;