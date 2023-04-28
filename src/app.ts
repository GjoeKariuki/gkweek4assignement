interface iHabits {
    name: string,
    stopdate: string,
    icon: string
}

class StreakHabits{
    
    async getStreakHabits() {
        const response = await fetch('http://localhost:3000/streaks')
        const streaks = await response.json() as iHabits[]
        
        const streakContainer = document.querySelector("#myStreaks") as HTMLDivElement
        let html = '';

        for(let i = 0; i <streaks.length; i++){
            if(streaks[i]){
                html += `
                <div style="padding: 5px;margin-right: 10px;border: 6px solid bisque">
                    <img src="${streaks[i].icon}" style="height:30px;width:30px" alt="home-message">
                    <h1>${streaks[i].name}</h1>
                    <h5>${streaks[i].stopdate}</h5>
                </div>`
                // console.log(streaks[i].name);
                // console.log(streaks[i].stopdate);
            }
            
            
            
        }
        streakContainer.innerHTML = html
        
    }

    // static displayStreakHabits() {

    // }

}

new StreakHabits().getStreakHabits()


// const streakContainer = document.querySelector("#my-streaks") as HTMLDivElement
// const habitName = document.querySelector("#habit-name")! as HTMLInputElement
// const stopDate = document.querySelector("#stop-date")! as HTMLInputElement