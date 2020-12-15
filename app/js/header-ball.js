const headerBall = () => {
    const header = document.querySelector('header');
    const headBall = document.createElement('div');
    headBall.classList.add('headball');

    const ball = document.createElement('div');
    ball.classList.add('ball');

    const line = document.createElement('div');
    line.classList.add('line');

    ball.append(line);
    headBall.append(ball);
    header.prepend(headBall);
}

headerBall();