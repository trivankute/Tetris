export const levelArr = [10,50,100,200,400,600,1000, 1500, 2000]
export const sumExp = levelArr.reduce((acc, level) => acc + level)
export const levelTitles = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Dinamond', 'Master', 'GrandMaster', 'Challenger']
export const levelColors = ['#5e5e5e', '#CD7F32', '#C0C0C0', '#FFD700', '#E5E4E2', '#A0E1F5', '#4c00b0', '#D30000', 'orange']
export const radius = 22
export const radiusCx = radius +3
export const radiusCy = radius +3
export const Perimeter = Math.floor(radius*3.14*2)
