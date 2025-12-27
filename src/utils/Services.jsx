export const getCookie = (name) => {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    return cookies[name];
};


export const TimeAgo = (originalTime) => {
    const timeAgo = (date) => {
        const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

        if (seconds < 60) return `${seconds}s ago`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    };

    const latestVisitTime =
        originalTime.visitHistory.reduce(
            (latest, curr) =>
                new Date(curr.visitTime) > new Date(latest.visitTime) ? curr : latest
        ).visitTime;
        
    const res = timeAgo(latestVisitTime)
    return res
}
