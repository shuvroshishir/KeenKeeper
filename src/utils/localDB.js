
const getTimelineFromLocalDB = () => {
    const allTimeline = localStorage.getItem('timeline');

    if (allTimeline) return JSON.parse(allTimeline);
    return [];
}

const addNewItemIntoLocalDB = (newItem) => {
    const timeline = getTimelineFromLocalDB();
    timeline.unshift(newItem);
    localStorage.setItem('timeline', JSON.stringify(timeline));
}

export { getTimelineFromLocalDB, addNewItemIntoLocalDB };