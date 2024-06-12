const gameOverPrompt = (health, name) => {

    const verdict = [` ${name} WON`, `${name} LOST`]

    if (health > 0)
        return verdict[0]
    else
        return verdict[1]
}

export {gameOverPrompt}