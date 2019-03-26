const random = Math.random() * 3;

const randomHeltall = Math.floor(random);


switch (randomHeltall) {
    case 0:
        document.write(randomHeltall + " is a small number")
        break;
    case 1:
        document.write(randomHeltall + " is a medium big number")
        break;
    case 2:
        document.write(randomHeltall + " is a big number")
}













/*
if(randomHeltall < 1) {
    document.write(randomHeltall + " is a small number")
} else if(randomHeltall === 1) {
    document.write(randomHeltall + " is a medium big number")
}
else {
    document.write(randomHeltall + " is a big number")
}
/*/