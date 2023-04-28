"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StreakHabits {
    getStreakHabits() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/streaks');
            const streaks = yield response.json();
            const streakContainer = document.querySelector("#myStreaks");
            let html = '';
            for (let i = 0; i < streaks.length; i++) {
                if (streaks[i]) {
                    html += `
                <div style="padding: 5px;margin-right: 10px;border: 6px solid bisque">
                    <img src="${streaks[i].icon}" style="height:30px;width:30px" alt="home-message">
                    <h1>${streaks[i].name}</h1>
                    <h5>${streaks[i].stopdate}</h5>
                </div>`;
                    // console.log(streaks[i].name);
                    // console.log(streaks[i].stopdate);
                }
            }
            streakContainer.innerHTML = html;
        });
    }
}
new StreakHabits().getStreakHabits();
// const streakContainer = document.querySelector("#my-streaks") as HTMLDivElement
// const habitName = document.querySelector("#habit-name")! as HTMLInputElement
// const stopDate = document.querySelector("#stop-date")! as HTMLInputElement
