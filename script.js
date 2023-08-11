// 1. Задача на селектори

// + для елементу з текстом 'Навігація по DOM дереву'
// + для першого елементу <section>
// + для елементу списку з текстом 'Пункт 5'
// + для елементу з класом 'hatredLevelBlock'

//  Кожен селектор має бути унікальним(тобто всі мають бути створені 
// 	за допомогою різних методів) і має бути присвоєний якійсь змінній.


// // + для елементу з текстом 'Навігація по DOM дереву'
headerTwo = document.getElementById('headerTwo')

console.log(headerTwo)
//========================================================================================================================================================
// + для першого елементу <section>
section = document.getElementsByTagName('section')[0]

console.log(section)
//========================================================================================================================================================
// + для елементу списку з текстом 'Пункт 5'
function queryItemFive() {
	let listItems = document.querySelectorAll('li')
	let resultArr = []
	for (let i = 0; i < listItems.length; i++) {
		if (listItems[i].textContent === 'Пункт 5') {
			resultArr.push(listItems[i])
			return resultArr[0]
		}
	}
}

console.log(queryItemFive())
//========================================================================================================================================================
// для елементу з класом 'hatredLevelBlock'

hatredLevelBlock = document.getElementsByClassName('hatredLevelBlock')[0]
console.log(hatredLevelBlock);