//Proximity graph using canvas

const getRandomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

const clientWidth = document.documentElement.clientWidth;
const width = clientWidth + 400;
const maxHeight = 3600;
const TOTAL_POINTS = clientWidth < 1440 ? clientWidth - 300 : 1000;

const CONNECT_DISTANCE = 100;

let points = [];

for (let i = 0; i < TOTAL_POINTS; i++) {
    points.push({
        x: getRandomInRange(0, width),
        y: getRandomInRange(0, maxHeight),
        d: getRandomInRange(0, 360),
        s: 0.8,
        size: Math.floor(getRandomInRange(100, 350)) / 100,
    });
}

const distance = (point, other) => {
    return Math.sqrt((other.x - point.x) ** 2 + (other.y - point.y) ** 2);
};

const movePoint = (point) => {
    point.x += point.s * Math.cos(point.d);
    point.y += point.s * Math.sin(point.d);
};

const drawPoint = (point, ctx) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${point.size / 5})`;
    ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
    ctx.fill();
};

const drawLine = (point, other, d, ctx) => {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(other.x, other.y);
    if (point.d < 255 && other.d < 255) {
        ctx.strokeStyle = `rgba(255, 255, ${point.d}, ${Math.abs(
            d / CONNECT_DISTANCE - 1
        )})`;
    } else {
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.abs(
            d / CONNECT_DISTANCE - 1
        )})`;
    }
    ctx.stroke();
};

const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, width, maxHeight + 5);

    points.forEach((point) => {
        movePoint(point);
    });

    points = points.filter((point) => {
        return (
            point.x >= 0 &&
            point.x < width - 1 &&
            point.y >= 0 &&
            point.y < maxHeight
        );
    });

    if (points.length < TOTAL_POINTS) {
        while (points.length < TOTAL_POINTS) {
            points.push({
                x: getRandomInRange(0, width),
                y: getRandomInRange(0, maxHeight),
                d: getRandomInRange(0, 360),
                s: 0.8,
                size: Math.floor(getRandomInRange(100, 350)) / 100,
            });
        }
    }

    points.forEach((point) => {
        drawPoint(point, ctx);
    });

    points.forEach((point) => {
        points.forEach((other) => {
            if (point === other) {
                return;
            }

            const d = distance(point, other);
            if (d < CONNECT_DISTANCE) {
                drawLine(point, other, d, ctx);
            }
        });
    });
};

export default draw;
//end
