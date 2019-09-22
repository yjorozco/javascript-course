/*const clock = {
    time: 0,
    stopWatch: function(){
        const self = this;
        setInterval(function(){
            console.log(self);
            console.log(self.time++);
        }, 1000)
    }
}
clock.stopWatch();
*/

/*const clock = {
    time:0,
    stopWatch: function(){
        setInterval(
            ()=>{
                console.log(this.time++);
            }, 1000
        )
    }
}

clock.stopWatch();*/


function UI(number){
    this.number = number;
}

UI.prototype.addNumber =function(){
    console.log(this.number++);
    document.getElementById('btn').addEventListener('click', () => {
        console.log(this);
        console.log(this.number++);
    })
}

const ui = new UI(0);
ui.addNumber();