function areaSquare(side){
    return side*side;
}

function areaRectangle(length,breadth){
    return length*breadth;
}

const PI=3.14;

function areaCircle(radius){
    return PI*(radius*radius); 
}


module.exports={
    square:areaSquare,
    rectangle:areaRectangle,
    circle:areaCircle
}

