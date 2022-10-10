import { FlatList, useWindowDimensions, FlatListProps } from 'react-native';

import notifications from '../../assets/data/notifications';

import NotificationItem from './NotificationItem';

const NotificationList = ({ ...flatListProps }) => {
    const { height } = useWindowDimensions();

    return (
        <FlatList
            data={notifications}
            renderItem={({ item, index }) => (
                <NotificationItem data={item} index={index} />
            )}
            {...flatListProps}
        />
    );
};

export default NotificationList;