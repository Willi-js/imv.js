import { GAME_HEIGHT, GAME_WIDTH, Root } from "../imv.js";

export default class Rect {
    constructor(width, height, x, y,append_to = Root.getRoot(), color = 'black'){
        //poisiotns and parameters
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.isOnScreen = false;
        //color
        this.color = color;
        //ID, calsses
        this.ID = 100000000000000 + Math.floor(Math.random()*9999999999999);
        this.class = [];
        //directions
        this.directionX = 'r';
        this.directionY = 'b';
        //define a custom parent
        this.append_object = append_to;

        this.lastStep = [this.x, this.y];
        this.currentStep = [this.x, this.y];

        this.object;
    };

    draw() {
        if(!this.isOnScreen) {
            this.isOnScreen = true;
            this.object = document.createElement('div');
            this.append_object.append(this.object);
            this.object.setAttribute('id', this.ID);
            this.object.style.position = 'absolute';
            this.object.style.width = `${this.width}px`;
            this.object.style.height = `${this.height}px`;
            this.object.style.backgroundColor = this.color;
            this.object.style.left  = `${this.x}px`;
            this.object.style.top = `${this.y}px`;
        };
    };

    patrollX(speed = 1, startpoint = 0, endpoint = GAME_WIDTH-this.width) {

        if(startpoint > endpoint) {
            var firstpoint = startpoint;
            var secondpoint = endpoint;
            startpoint = secondpoint;
            endpoint = firstpoint;
        };
        
        if(this.directionX === 'r'){
            this.x += speed;
            if(this.x >= endpoint){
                this.directionX = 'l';
            };
        } else {
            this.x -= speed;
            if(this.x <= startpoint){
                this.directionX = 'r';
            };
        };

        this.object.style.left = `${this.x}px`;
    };

    patrollY(speed = 1, startpoint = 0, endpoint = GAME_HEIGHT-this.height) {
        if(startpoint > endpoint) {
            var firstpoint = startpoint;
            var secondpoint = endpoint;
            startpoint = secondpoint;
            endpoint = firstpoint;
        };

        if(this.directionY === 'b'){
            this.y += speed;
            if(this.y >= endpoint){
                this.directionY = 't';
            };
        } else {
            this.y -= speed;
            if(this.y <= startpoint){
                this.directionY = 'b';
            };
        };

        this.object.style.top = `${this.y}px`;
    };

    change_pos(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.object.style.left = `${this.x}px`;
        this.object.style.top = `${this.y}px`;

        this.lastStep = this.currentStep;

        this.currentStep = [this.x, this.y];

    };

    rotate(deg = 0, fromlast = false) {
        if(fromlast === true) {
            this.object.style.rotate = +this.object.style.rotate.replace('deg', '') + deg + 'deg';
        } else {
            this.object.style.rotate = deg + 'deg';
        };
    };

    change_color(color = 'black') {
        this.color = color;
        
        this.object.style.backgroundColor = this.color;
    }

    style(funct = () => {console.log(this.object)}) {
        funct(this.object.style);
    };

    event_MouseDown(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mousedown', (event) => {
            funct(event);
        });
    };

    event_MouseDownLeft(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mousedown', (event) => {
            if(event.button === 0) funct(event);
        });
    };

    event_MouseDownMiddle(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mousedown', (event) => {
            if(event.button === 1) funct(event);
        });
    };

    event_MouseDownRight(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mousedown', (event) => {
            if(event.button === 2) funct(event);
        });
    };

    event_MouseOver(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mouseover', (event) => {
            funct(event);
        });
    }; 

    event_MouseEnter(funct = () => {console.log(dthis.object)}) {
        this.object.addEventListener('mouseenter', (event) => {
            funct(event);
        });
    };

    event_MouseLeave(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mouseleave', (event) => {
            funct(event);
        });
    };

    event_MouseMove(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mousemove', (event) => {
            funct(event);
        });
    };
    
    event_MouseOut(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mouseout', (event) => {
            funct(event);
        });
    };
    
    event_MouseUp(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('mouseup', (event) => {
            funct(event);
        });
    };

    event_KeyDown(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('keydown', (event) => {
            funct(event);
        });
    };

    event_KeyUp(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('keyup', (event) => {
            funct(event);
        });
    };

    event_KeyPress(funct = () => {console.log(this.object)}) {
        this.object.addEventListener('keypress', (event) => {
            funct(event);
        });
    };

    getEl() {
        return this.object;
    };

    getX() {
        return this.x;
    };

    getY() {
        return this.y;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };

    getColor() {
        return this.color;
    };

    getDirections() {
        return [this.directionX, this.directionY];
    };

    getDirectionX() {
        return this.directionX;
    };

    getDirectionY() {
        return this.directionY;
    };

    getID(type = 'num') {
        if(type === 'num') {
            return this.ID;
        } else if(type === 'str') {
            return this.ID.toString();
        } else if(type === 'arr') {
            return Array.from(String(this.ID), Number);
        } else {
            console.error('Error: defined type is not found');
            return 'Error: defined type is not found';
        };
    };

    setID(newID = this.ID) {
        this.ID = newID;
        this.object.setAttribute('id', this.ID);
    };

    getClasses() {
        return this.class;
    };

    addClass(newClass = 'class') {
        var splitClasses = newClass.split(' ');

        splitClasses.forEach(element => {
            this.class.push(element);
        });

        var classList = this.class.join(' ');
        this.object.setAttribute('class', classList);
    };

    removeClass(removeClass = 'class') {
        var classIndex = this.class.indexOf(removeClass);
        this.class.splice(classIndex, 1);
        var classList = this.class.join(' ');
        this.object.setAttribute('class', classList);
    };

    check_collision() {

        var collision = {
            isCollided: false,
            collidesWidth: [],
            collidesWidthClasses: [],
            collisionSide: []
        };
    
        var square = document.getElementById(this.ID);
        var allEllements = this.append_object.children;
        var allEllementsArray = Object.values(allEllements);
        var sqaureIndex = allEllementsArray.indexOf(square);
        allEllementsArray.splice(sqaureIndex, 1);
    
        for(let i=0;i<allEllementsArray.length;i++) {
            var element = allEllementsArray[i];
            var elWidth = +element.style.width.replace('px', '');
            var elHeight = +element.style.height.replace('px', '');
            var elX = +element.style.left.replace('px', '');
            var elY = +element.style.top.replace('px', '');
            
            if(
                this.x + this.width >= elX &&
                this.x <= elX + elWidth &&
                this.y + this.height >= elY &&
                this.y <= elY + elHeight
            ) {
                collision.isCollided = true;
                
                collision.collidesWidth.push(element);
    
                var classes = element.className.split(' ');
    
                classes.forEach(element => {
                    collision.collidesWidthClasses.push(element);
                });
    
                var dx = (this.x + this.width / 2) - (elX + elWidth / 2);
                var dy = (this.y + this.height / 2) - (elY + elHeight / 2);
    
                var minDistanceX = (this.width + elWidth) / 2;
                var minDistanceY = (this.height + elHeight) / 2;

                var collisionSides = [];
                if (Math.abs(dx) <= minDistanceX && Math.abs(dy) <= minDistanceY) {
                    var offsetX = minDistanceX - Math.abs(dx);
                    var offsetY = minDistanceY - Math.abs(dy);
    
                    if (offsetX >= offsetY) {
                        if (dy > 0) {
                            collisionSides.push('top');
                        } else {
                            collisionSides.push('bottom');
                        }
                    } else {
                        if (dx > 0) {
                            collisionSides.push('left');
                        } else {
                            collisionSides.push('right');
                        }
                    }
                }
            
                collision.collisionSide = collision.collisionSide.concat(collisionSides);
            }
        }

        collision.collisionSide = [...new Set(collision.collisionSide)];
    
        return collision;
    };

    remove() {
        this.isOnScreen = false;
        this.object.remove();
    };

    isOnScreen() {
        return this.isOnScreen;
    };

    get_atribute(attribute) {
        var return_attribute = this.object.getAttribute(attribute).split(' ');
        return return_attribute;
    };

    set_attribute(attribute, value) {
        this.object.setAttribute(attribute, value);
    }

    set_sprite(link) {
        this.object.style.backgroundImage = `url(${link})`;
        this.object.style.backgroundRepeat = 'no-repeat';
        this.object.style.backgroundPosition = 'center';
        this.object.style.backgroundSize = 'cover';
    }

    fixToScreen(positionX = 'middle', positionY = 'middle') {

        if(positionX === 'middle') {
            this.x = GAME_WIDTH/2-this.width/2;
            this.change_pos(this.x, this.y);
        } else if(positionX === 'left') {
            this.x = 0;
            this.change_pos(this.x, this.y);
        } else if(positionX === 'right') {
            this.x = GAME_WIDTH-this.width;
            this.change_pos(this.x, this.y);
        }

        if(positionY === 'middle') {
            this.y = GAME_HEIGHT/2-this.height/2;
            this.change_pos(this.x, this.y);
        } else if(positionY === 'top') {
            this.y = GAME_HEIGHT-this.height;
            this.change_pos(this.x, this.y);
        } else if(positionY === 'bottom') {
            this.y = 0;
            this.change_pos(this.x, this.y);
        }

    }

};