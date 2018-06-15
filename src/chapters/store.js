let state = {
    index: 0,
    track: 10,
    topicsList: [{
            videoId: 'sbvSBH2Mo20',
            title: 'Finding the inverse of a function'
            ,type: 'video'
        },
        
        {
            title: "Range of a function",
            videoId: '4kCHuVrtbc4'
            , type: 'video'
        },
        {
            title: "Domain of a function",
            videoId: 'w81y25anEOM'
            , type: 'video'
        },
        {
            title: "Range of a function",
            videoId: '4kCHuVrtbc4'
            , type: 'video'
        },
        {
            title: "Excercise-finding domain and range of a function",
            imageSrc: './excercisea.jpg',
            type: 'video'
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
export const goBack= () => {
      const currentIndex = state.index
      const index = currentIndex + -1
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