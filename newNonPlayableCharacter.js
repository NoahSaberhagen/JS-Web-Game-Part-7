const newNonPlayableCharacter = (x, y) => {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    const moveCharacter = () => {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    const walkEast = async (time) => {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time);
        stop();
    }

    const walkNorth = async (time) => {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time);
        stop();
    }

    const walkWest = async (time) => {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time);
        stop();
    }

    const walkSouth = async (time) => {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time);
        stop();
    }

    const stop = () => {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}
