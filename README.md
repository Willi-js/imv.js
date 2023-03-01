# imv.js
imv.js is a library created to make game creation in html and vanila javascript much easyer.

To get started clone repository to a clean folder, everything you will need is already in the repository, you can look trough source files in `/src` to get 
a better understanding of what is going on behind scenes, when you are ready jump into `main.js` file which you can find in `/scripts` directory.

**I should mention that to use this library you should already have knowlage about how javascript work, and be familiar with javascript classes, functions, logical statements, variables, objects and loops.**

# start up code / small documentation

In main.js file you will find some boiler plate code ready for you. it has an import that import whole library that you can access useing imv keyword.

Moving on line `3` you will find function `imv.update_screen_size()` you can find this function if you look into `/src/shared/shared.js` file all this function does is
updates `GAME_WIDTH` and `GAME_HEIGHT` variables that are later beeing exported and used in library when calculating positions, collisions, movement etc. Personaly i recomend 
allways having this line at the top of your `main.js` file to keep `GAME_WIDTH` and `GAME_HEIGHT` variabes updates becouse library uses them insted of `window.innerHeight` or `window.innerWidth`
and if while useing your application user decides to change width or height of his screen library will know exacly how much everything has changed and will adapt to the changes

If you look at line `5` you will see an example rectangular object beeing defined useing `imv.Rect` class, all object in `imv` are defined the same way - by useing classes.
`imv.Rect` has `6 parameters` it has `width, height, x, y, parent` and `color` parameters that are beeing requested in a provided order. `Parent` parameter has to be an HTML element
in this case it is the game `Root` element, you can find it by going into `/index.html` file, it is beeing defined in the `<body>` html tag then latter beeign accessed in imv library from 
`/src/library/Root.js` file in root class, and returned as html elemnt through `Root` class useing `.getRoot()` method. But this parameter accepts any parent as log as it is returned in html element format.

Looking at next line - line `6`, we can see that `.draw()` method is beeing used on `newEl` constant variable which was declared as `new imv.Rext()` class we talked about previously.
`.draw()` method can be used only once to draw the element to the screen, how ever if `.remove()` method will be used later on to remove element from the screen, it will allow you to use `.draw()` once again,
so as long as element is not on the screen `.draw()` method is available for your usage, and when element is on the screen this method will no longer function.

If you are familiar with javascripts loops you should understand what is happening from line `8` to `12`, how ever just for the sake of documentation i will go through it.
On lines `8` and `10` we create a function called `game_loop()`, I would like to mention that any function or method that requires looping should be executed in here(I will go trougth them later on).
On line `9` we request animation frame useing javascripts built in `requestAnimationFrame()` method, which will start looping through our code as soon as the function is executed and will adapt its self to the users
performance speed, computer resources and browser resource limitations, giving us a smooth loop.
Line `12` we just execute the looped function allowing it to start looping through its self.

# documentation

when working with imv classes and functions this is the place to search for ansswers, we will now go through everything there is to know in `imv.js` module, I will explain how everything work, will provide you with tips and triks you can use to code and ship yuor game as fast as possible achieving best possible performance.

lets start with what is `imv.js`, `imv.js` is a game making module for vanila html javascript. It provides a set off classes you can use to make creating and manipulating game objects faster and lets you more focus on the logical part of making a game insted of the time you'd spend trying just to display text or some other object.

##### we will go file by file and will learn everything there is to lets start with `/src/imv.js`.

## /src/imv.js
> this is from where you import all the classes, functions and varibles, I import all the other module file in here to later export them in one object and let you access everything useing just one keyword `imv`.
   
##### now lets go into `/src/shared/shared.js` file and go through everything in there.

## GAME_WIDTH, GAME_HEIGHT
> Two variable depending on the game you're makign you might find your self useing quite often. these varibles are the same as `window.innerWidth` and `window.innerHeigh`, these variables are always beeing updated by function I have already recomended to allways keep at the tom of your `main.js` file - `imv.update_screen_size()`.

## update_screen_size()
> function that updates `GAME_WIDTH` and `GAME_HEIGHT` varibles, it loops useing `requestAnimationFrame()` built in method. You should allways execute this function at the top of your `main.js` file if you want to have up-to-date data about users screen parameters.

##### we have covered everything in `/src/shared/shared.js` file, let move into `/src/library/Rect.js` file and we will be in here for a while :) .

## Rect class
> this is a class you use to define and manipulate rectangualar objects on the screen. It is quite big and has a lot of methods to manipulate the object, you create a new Rect object by writing line `const variable_name = new imv.Rect(width, height, x, y, parent, background_color)` in your `main.js` file or any other file you have `imv` imported in. Width height, x, y parameters are required, how ever parent and background color can be left undefined, parent default value will be automaticly set to the `root` div and color to black. When creating the element a random ID will be given to it, you can modify it later but i do not recomend it , any styling you need to do you can achieve adding classes to the object, leave ID be as it is, becouse later you can use it to tell type of hte object you have encountered by refering to the first two numbers of the ID - 10 is rectangular object, 20 is text object.

## .draw() method
> this method is used to draw your object to the screen, this method can be only used only when object is not yet drawn to the screen, after it is you can call it as many times as you want, it wont do a thing. I should tell you that most if not all other methods can only be called after execution of this method, becouse most of them refer to the html element which will only appears on the screen adter `.draw` method was executed.

## .patrollX(speed, start_point, end_point) method
> this method let your object patroll in your given interval, `THIS MEHOD SHOULD BE EXECUTED IN A LOOP`. Loop takes in three optional parameters `speed` , `start` and `end` point, start and end points by deault are equal to `0` and `imv.GAME_WIDTH-object.width`, `speed` by default is equal to `1`. Once the method is called in a loop your object will start patrolling in the given X axis interval infinetly or until you end it with logical functions. start point always has to be less then end point if its not method will take matters in its own hands and will swich them. object will always start moving from right to left, you can change it by before first execution changing objects directionX variables, you can achieve this by typing `object_variable_name.directionX = 'l'` this will set the direction to left.

## .patrillY(speed, start_point, end_point) method
> this method works exacly the same way `.patrollX()` we have gone through method does, it has exacly same propertys exept that insted of working in X it works in Y axis, this method should also be `ONLY EXECUTED IN A LOOP`. There is only on diffrence in parameter - `end_point` insted of beeing equal to `imv.GAME_WIDTH-object.width` is now equal to `imv.GAME_HEIGHT-object.height`, everythign else is the same.

## change_pos(x, y) method
> this method changed the position of your element, it takes in two optional parameters `x` and `y`, by default they are both equal to 0. Up on methods execution it changed your elements position to the new `x` and `y` values. This method also saves the last possitions of your element and puts into an array you can access it by saying `object_variables_name.lastStep` this will give you an array which looks like this [`last_x_possition`, `last_y_possition`].

## rotate(degrees, from_last_rotation) method
> this method rotates your object by given degrees. Mthod takes in two optional parameters - `degrees` and `from_last_rotation`. `degrees` parameter has to be passed in in numbers and by default is equal to `0`, `from_last_rotation` has to be passed in as boolean(true, false) by default its value is false, IF you will pass `true` in `from_last_rotation` you `HAVE TO PUT THIS METHOD IN A LOOP`, by passing `from_last_rotatiom` true you are saying that his elements should spin infinitly until you stop it with logical functions, then your `degrees` parameter becomes speed, higher number you've passed there - faster it will spin.

## change_color(new_background_color) method
> `change_color()` method allows you to quickly chnage background of your rectangular element. Method expects one optional parameter - `new_background_color`, by default this parameters value is equal to `black` meaning - if you execute the method on the object without passing in another color it will change the `color` to black, you can pass in `any format` of color - hex, rgb, rgba etc. as long as the color types are also awailablt in css.

## style(callback_function) method
> method allows you to style element from your javascript file without having to go to the css. I dont find my self useing this method often, unless i need to over write some default values i can not chnage with css. This method expects one parameter - `calback function`. when writing a callback function request one parater in there for example:
```
object.style((object) => {

})
```
> in the object parameter I have requested your html element will be passed like this `object.style`, meaning all you have to do to start styling it is write style names and its value - for example:
```
object.style(object => {
    object.position = 'relative';
    object.backgroundColor = 'green';
})
```

## EVENTS
> We are starting to work with events, not all events yet are in the library, but I am adding them when I can. Currently there are `13` event handlers you can work with that are provided by the library:
```

event_MouseDown(callback),
event_MouseDownLeft(callback),
event_MouseDownMiddle(callback),
event_MouseDownRight(callback),
event_MouseOver(callback),
event_MouseEnter(callback),
event_MouseLeave(callback),
event_MouseMove(callback),
event_MouseOut(callback),
event_MouseUp(callback),
event_KeyDown(callback),
event_KeyUp(callback),
event_KeyPress(callback)

```
> All of these events work the same way, you write the method on to your object when event is fired it will execute the calback function. For example:
```
// this event will fire when left mouse button will be clicked on the element
object.event_MouseDownLeft(() => {
     console.log("Hello, World!");
})
```
> You might want to have the event property, all you have to do is request the parameter in the callback function, then your parameter will have all the vanila javascript event propertys. For example:

```
object.event_MouseDownLeft(event => {
    let cursor_x = event.clientX;
    let cursor_y = event.clientY;
    
    conosle.log(`you have clicked the element, your cursor landed on ${cursor_x} of x and ${cursor_y} of y pixels`);
})
```
> As I have previously mentioned not all the events are yet in the library, if you need any event that is not yet there you can use `getEl()` method and put a vanila javascript event handler onto it. For example:
```
object.getEl().addEventListener("focus", event => {
    conosle.log('element was focused');
})
```
