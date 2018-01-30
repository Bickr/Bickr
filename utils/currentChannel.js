//Put this in your reducer
export function currentChannelList(categoryName, channelList) {
    return channelList.filter(channel => channel.category === categoryName);
}