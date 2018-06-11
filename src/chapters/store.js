let state = {
    index: 0,
    topicsList: [{
            videoId: 'sbvSBH2Mo20',
            title: 'Intro To Functions'
        },
        {
            title: "Functions In A plane"
        },
        {
            title: "Composition of Functions"
        },
        {
            title: "Finding The Domain"
        },
        {
            title: "Finding The Range"
        },
        {
            title: "Inverse Functions"
        }
    ]
};

const subscribers = []

export const subscribe = (func) => {
    subscribers.push(func)
    const unsubcribe = () => {
        const index = subscribers.indexOf(func)
        if(index>=0){
            subscribers.splice(index,1)
        }
    }
    return unsubcribe
}

export const getState = () => state

const setState = (additionalState) => {
    const newState = { ...state, ...additionalState }
    subscribers.forEach( func => func(newState))
    state = newState
}

export const goNext = () => {
    const currentIndex = state.index
    const index = currentIndex + 1
    const nextTopic = state.topicsList[index]
    if (!nextTopic) {
        // finished list, do something
        return;
    }
    const {
        videoId,
        title
    } = nextTopic
    setState({
        videoId,
        title,
        index,
    })
}