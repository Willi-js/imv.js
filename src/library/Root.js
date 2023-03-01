class RootDiv {

    constructor() {
        this.root = document.getElementById('root');
    };

    getRoot() {
        return this.root;
    };

    event_MouseDown(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mousedown', (event) => {
            funct(event);
        });
    };

    event_MouseDownLeft(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mousedown', (event) => {
            if(event.button === 0) funct(event);
        });
    };

    event_MouseDownMiddle(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mousedown', (event) => {
            if(event.button === 1) funct(event);
        });
    };

    event_MouseDownRight(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mousedown', (event) => {
            if(event.button === 2) funct(event);
        });
    };

    event_MouseOver(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mouseover', (event) => {
            funct(event);
        });
    }; 

    event_MouseEnter(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mouseenter', (event) => {
            funct(event);
        });
    };

    event_MouseLeave(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mouseleave', (event) => {
            funct(event);
        });
    };

    event_MouseMove(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mousemove', (event) => {
            funct(event);
        });
    };
    
    event_MouseOut(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mouseout', (event) => {
            funct(event);
        });
    };
    
    event_MouseUp(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('mouseup', (event) => {
            funct(event);
        });
    };

    event_KeyDown(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('keydown', (event) => {
            funct(event);
        });
    };

    event_KeyUp(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('keyup', (event) => {
            funct(event);
        });
    };

    event_KeyPress(funct = () => {console.log(document.getElementById(this.ID))}) {
        addEventListener('keypress', (event) => {
            funct(event);
        });
    };
};

const Root = new RootDiv();

export default Root;