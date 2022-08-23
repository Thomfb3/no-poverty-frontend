const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    const day = date.toLocaleString('default', { day: 'numeric' });
    const time = Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true, timeZone: "America/New_York" }).format(date); 
    const daysOfTheWeek = ["Sunday", "Saturday","Monday","Tuesday","Wednesday", "Thursday", "Friday"] 
    return `${daysOfTheWeek[date.getUTCDay()]}, ${month} ${day}, ${year} - ${time}`;
};

const formatShortDate = (timestamp) => {
    const date = new Date(timestamp)
    const month = date.toLocaleString('default', { month: 'numeric' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    const day = date.toLocaleString('default', { day: 'numeric' });
    return `${month}/${day}/${year}`;
};

const formatLongDate = (timestamp) => {
    const date = new Date(timestamp)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    const day = date.toLocaleString('default', { day: 'numeric' });
    return `${month} ${day}, ${year}`;
};

const formatDay = (timestamp) => {
    const date = new Date(timestamp)
    const daysOfTheWeek = ["Sunday", "Saturday","Monday","Tuesday","Wednesday", "Thursday", "Friday"] 
    return `${daysOfTheWeek[date.getUTCDay()]}`;
};

const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const time = Intl.DateTimeFormat('en', { hour: "numeric", minute: "numeric", hour12: true, timeZone: "America/New_York" }).format(date); 
    return `${time}`;
};

module.exports = { 
    formatDate, 
    formatShortDate, 
    formatDay, 
    formatTime, 
    formatLongDate 
}; 