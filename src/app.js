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
            let html = '';
            streaks.forEach((strk) => {
                console.log(strk.name);
                console.log(strk.stopdate);
            });
        });
    }
}
new StreakHabits().getStreakHabits();
// const streakContainer = document.querySelector("#my-streaks") as HTMLDivElement
// const habitName = document.querySelector("#habit-name")! as HTMLInputElement
// const stopDate = document.querySelector("#stop-date")! as HTMLInputElement
