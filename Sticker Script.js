function isTouchScreen() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

isMobile = isTouchScreen()

isAppendInfoText = false

$(document).ready(() => {
	let bwPack = {
		s1: 'B&W Pack/B&W Sticker 1.jpg',
		s2: 'B&W Pack/B&W Sticker 2.jpg',
		s3: 'B&W Pack/B&W Sticker 3.jpg',
		s4: 'B&W Pack/B&W Sticker 4.jpg',
		s5: 'B&W Pack/B&W Sticker 5.jpg',
		s6: 'B&W Pack/B&W Sticker 6.jpg',
		s7: 'B&W Pack/B&W Sticker 7.jpg',
		s8: 'B&W Pack/B&W Sticker 8.jpg',
		s9: 'B&W Pack/B&W Sticker 9.jpg',
		s10: 'B&W Pack/B&W Sticker 10.jpg',
		Quantity: 10,
	}

	let bwInfo = `
	Black $ White Pack - это стикер-пак выполненный в монотонных тонах. Основное настроение стикер-пака - депрессивное.
	`

	let emojiPack = {
		s1: 'Emoji Pack/Emotion 1.png',
		s2: 'Emoji Pack/Emotion 2.png',
		s3: 'Emoji Pack/Emotion 3.png',
		s4: 'Emoji Pack/Emotion 4.png',
		s5: 'Emoji Pack/Emotion 5.png',
		s6: 'Emoji Pack/Emotion 6.png',
		s7: 'Emoji Pack/Emotion 7.png',
		s8: 'Emoji Pack/Emotion 8.png',
		s9: 'Emoji Pack/Emotion 9.png',
		s10: 'Emoji Pack/Emotion 10.png',
		s11: 'Emoji Pack/Emotion 11.png',
		s12: 'Emoji Pack/Emotion 12.png',
		s13: 'Emoji Pack/Emotion 13.png',
		s14: 'Emoji Pack/Emotion 14.png',
		s15: 'Emoji Pack/Emotion 15.png',
		s16: 'Emoji Pack/Emotion 16.png',
		s17: 'Emoji Pack/Emotion 17.png',
		s18: 'Emoji Pack/Emotion 18.png',
		s19: 'Emoji Pack/Emotion 19.png',
		s20: 'Emoji Pack/Emotion 20.png',
		s21: 'Emoji Pack/Emotion 21.png',
		s22: 'Emoji Pack/Emotion 22.png',
		s23: 'Emoji Pack/Emotion 23.png',
		s24: 'Emoji Pack/Emotion 24.png',
		Quantity: 24,
	}

	let emojiInfo = `
	Простейший стикер-пак с эмодзи, сделанный за один день.
	`

	let mainPack1 = {
		s1: 'Main Pack 1/Sticker 1.jpg',
		s2: 'Main Pack 1/Sticker 2.jpg',
		s3: 'Main Pack 1/Sticker 3.jpg',
		s4: 'Main Pack 1/Sticker 4.jpg',
		s5: 'Main Pack 1/Sticker 5.jpg',
		s6: 'Main Pack 1/Sticker 6.jpg',
		s7: 'Main Pack 1/Sticker 7.jpg',
		s8: 'Main Pack 1/Sticker 8.jpg',
		s9: 'Main Pack 1/Sticker 9.jpg',
		s10: 'Main Pack 1/Sticker 10.jpg',
		s11: 'Main Pack 1/Sticker 11.jpg',
		s12: 'Main Pack 1/Sticker 12.jpg',
		s13: 'Main Pack 1/Sticker 13.jpg',
		s14: 'Main Pack 1/Sticker 14.jpg',
		s15: 'Main Pack 1/Sticker 15.jpg',
		s16: 'Main Pack 1/Sticker 16.jpg',
		s17: 'Main Pack 1/Sticker 17.jpg',
		s18: 'Main Pack 1/Sticker 18.jpg',
		s19: 'Main Pack 1/Sticker 19.jpg',
		s20: 'Main Pack 1/Sticker 20.jpg',
		s21: 'Main Pack 1/Sticker 21.jpg',
		s22: 'Main Pack 1/Sticker 22.jpg',
		s23: 'Main Pack 1/Sticker 23.jpg',
		s24: 'Main Pack 1/Sticker 24.jpg',
		s25: 'Main Pack 1/Sticker 25.jpg',
		s26: 'Main Pack 1/Sticker 26.jpg',
		s27: 'Main Pack 1/Sticker 27.jpg',
		s28: 'Main Pack 1/Sticker 28.jpg',
		s29: 'Main Pack 1/Sticker 29.jpg',
		s30: 'Main Pack 1/Sticker 30.jpg',
		Quantity: 30,
	}

	let main1Info = `
	Первый созданный мною стикер-пак, самый простой и ленивый.
	`

	let mainPack2 = {
		s1: 'Main Pack 2/Sticker 31.jpg',
		s2: 'Main Pack 2/Sticker 32.jpg',
		s3: 'Main Pack 2/Sticker 33.jpg',
		s4: 'Main Pack 2/Sticker 34.jpg',
		s5: 'Main Pack 2/Sticker 35.jpg',
		s6: 'Main Pack 2/Sticker 36.jpg',
		s7: 'Main Pack 2/Sticker 37.jpg',
		s8: 'Main Pack 2/Sticker 38.jpg',
		s9: 'Main Pack 2/Sticker 39.jpg',
		s10: 'Main Pack 2/Sticker 40.jpg',
		s11: 'Main Pack 2/Sticker 41.jpg',
		s12: 'Main Pack 2/Sticker 42.jpg',
		s13: 'Main Pack 2/Sticker 43.jpg',
		s14: 'Main Pack 2/Sticker 44.jpg',
		s15: 'Main Pack 2/Sticker 45.jpg',
		s16: 'Main Pack 2/Sticker 46.jpg',
		s17: 'Main Pack 2/Sticker 47.jpg',
		s18: 'Main Pack 2/Sticker 48.jpg',
		s19: 'Main Pack 2/Sticker 49.jpg',
		s20: 'Main Pack 2/Sticker 50.jpg',
		s21: 'Main Pack 2/Sticker 51.jpg',
		s22: 'Main Pack 2/Sticker 52.jpg',
		s23: 'Main Pack 2/Sticker 53.jpg',
		s24: 'Main Pack 2/Sticker 54.jpg',
		s25: 'Main Pack 2/Sticker 55.jpg',
		s26: 'Main Pack 2/Sticker 56.jpg',
		s27: 'Main Pack 2/Sticker 57.jpg',
		s28: 'Main Pack 2/Sticker 58.jpg',
		s29: 'Main Pack 2/Sticker 59.jpg',
		s30: 'Main Pack 2/Sticker 60.jpg',
		Quantity: 30,
	}

	let main2Info = `
	Продолжение mainPack-а 1, где больше деталей и креатива.
	`

	let mainPack3 = {
		s1: 'Main Pack 3/Sticker 61.jpg',
		s2: 'Main Pack 3/Sticker 62.jpg',
		s3: 'Main Pack 3/Sticker 63.jpg',
		s4: 'Main Pack 3/Sticker 64.jpg',
		s5: 'Main Pack 3/Sticker 65.jpg',
		s6: 'Main Pack 3/Sticker 66.jpg',
		s7: 'Main Pack 3/Sticker 67.jpg',
		s8: 'Main Pack 3/Sticker 68.jpg',
		s9: 'Main Pack 3/Sticker 69.jpg',
		s10: 'Main Pack 3/Sticker 70.jpg',
		s11: 'Main Pack 3/Sticker 71.jpg',
		s12: 'Main Pack 3/Sticker 72.jpg',
		s13: 'Main Pack 3/Sticker 73.jpg',
		s14: 'Main Pack 3/Sticker 74.jpg',
		s15: 'Main Pack 3/Sticker 75.jpg',
		s16: 'Main Pack 3/Sticker 76.jpg',
		s17: 'Main Pack 3/Sticker 77.jpg',
		s18: 'Main Pack 3/Sticker 78.jpg',
		s19: 'Main Pack 3/Sticker 79.jpg',
		s20: 'Main Pack 3/Sticker 80.jpg',
		s21: 'Main Pack 3/Sticker 81.jpg',
		s22: 'Main Pack 3/Sticker 82.jpg',
		s23: 'Main Pack 3/Sticker 83.jpg',
		s24: 'Main Pack 3/Sticker 84.jpg',
		s25: 'Main Pack 3/Sticker 85.jpg',
		s26: 'Main Pack 3/Sticker 86.jpg',
		s27: 'Main Pack 3/Sticker 87.jpg',
		s28: 'Main Pack 3/Sticker 88.jpg',
		s29: 'Main Pack 3/Sticker 89.jpg',
		s30: 'Main Pack 3/Sticker 90.jpg',
		Quantity: 30,
	}

	let main3Info = `
	Еще один стикер-пак из серии mainPack-ов.<br>В не присутствует резкий скачок в стилях, в связи со сменой программы на более удобную.
	`

	let mainPack4 = {
		s1: 'Main Pack 4/Sticker 91.jpg',
		s2: 'Main Pack 4/Sticker 92.jpg',
		s3: 'Main Pack 4/Sticker 93.jpg',
		s4: 'Main Pack 4/Sticker 94.jpg',
		s5: 'Main Pack 4/Sticker 95.jpg',
		s6: 'Main Pack 4/Sticker 96.jpg',
		s7: 'Main Pack 4/Sticker 97.jpg',
		s8: 'Main Pack 4/Sticker 98.jpg',
		s9: 'Main Pack 4/Sticker 99.jpg',
		s10: 'Main Pack 4/Sticker 100.jpg',
		s11: 'Main Pack 4/Sticker 101.jpg',
		s12: 'Main Pack 4/Sticker 102.jpg',
		s13: 'Main Pack 4/Sticker 103.jpg',
		s14: 'Main Pack 4/Sticker 104.jpg',
		s15: 'Main Pack 4/Sticker 105.jpg',
		s16: 'Main Pack 4/Sticker 106.jpg',
		s17: 'Main Pack 4/Sticker 107.jpg',
		s18: 'Main Pack 4/Sticker 108.jpg',
		s19: 'Main Pack 4/Sticker 109.jpg',
		s20: 'Main Pack 4/Sticker 110.jpg',
		s21: 'Main Pack 4/Sticker 111.jpg',
		s22: 'Main Pack 4/Sticker 112.jpg',
		s23: 'Main Pack 4/Sticker 113.jpg',
		s24: 'Main Pack 4/Sticker 114.jpg',
		s25: 'Main Pack 4/Sticker 115.jpg',
		s26: 'Main Pack 4/Sticker 116.jpg',
		s27: 'Main Pack 4/Sticker 117.jpg',
		s28: 'Main Pack 4/Sticker 118.jpg',
		s29: 'Main Pack 4/Sticker 119.jpg',
		s30: 'Main Pack 4/Sticker 120.jpg',
		Quantity: 30,
	}

	let main4Info = `
	На данный момент последний стикер-пак из серии mainPack-ов. Он уже куда больше проработан, чем прошлые его собратья.
	`

	let pack1Rework = {
		s1: 'Rework 1/Rework 1.jpg',
		s2: 'Rework 1/Rework 2.jpg',
		s3: 'Rework 1/Rework 3.jpg',
		s4: 'Rework 1/Rework 4.jpg',
		s5: 'Rework 1/Rework 5.jpg',
		s6: 'Rework 1/Rework 6.jpg',
		s7: 'Rework 1/Rework 7.jpg',
		s8: 'Rework 1/Rework 8.jpg',
		s9: 'Rework 1/Rework 9.jpg',
		s10: 'Rework 1/Rework 10.jpg',
		s11: 'Rework 1/Rework 11.jpg',
		s12: 'Rework 1/Rework 12.jpg',
		s13: 'Rework 1/Rework 13.jpg',
		s14: 'Rework 1/Rework 14.jpg',
		s15: 'Rework 1/Rework 15.jpg',
		s16: 'Rework 1/Rework 16.jpg',
		s17: 'Rework 1/Rework 17.jpg',
		s18: 'Rework 1/Rework 18.jpg',
		s19: 'Rework 1/Rework 19.jpg',
		s20: 'Rework 1/Rework 20.jpg',
		s21: 'Rework 1/Rework 21.jpg',
		s22: 'Rework 1/Rework 22.jpg',
		s23: 'Rework 1/Rework 23.jpg',
		s24: 'Rework 1/Rework 24.jpg',
		s25: 'Rework 1/Rework 25.jpg',
		s26: 'Rework 1/Rework 26.jpg',
		s27: 'Rework 1/Rework 27.jpg',
		s28: 'Rework 1/Rework 28.jpg',
		s29: 'Rework 1/Rework 29.jpg',
		s30: 'Rework 1/Rework 30.jpg',
		Quantity: 30,
	}

	let rework1Info = `
	Переработка первого стикер-пака на новый лад. Куда лучше своего предка.
	`

	let pack2Rework = {
		s1: 'Rework 2/Rework 31.jpg',
		s2: 'Rework 2/Rework 32.jpg',
		s3: 'Rework 2/Rework 33.jpg',
		s4: 'Rework 2/Rework 34.jpg',
		s5: 'Rework 2/Rework 35.jpg',
		s6: 'Rework 2/Rework 36.jpg',
		s7: 'Rework 2/Rework 37.jpg',
		s8: 'Rework 2/Rework 38.jpg',
		s9: 'Rework 2/Rework 39.jpg',
		s10: 'Rework 2/Rework 40.jpg',
		s11: 'Rework 2/Rework 41.jpg',
		s12: 'Rework 2/Rework 42.jpg',
		s13: 'Rework 2/Rework 43.jpg',
		s14: 'Rework 2/Rework 44.jpg',
		s15: 'Rework 2/Rework 45.jpg',
		s16: 'Rework 2/Rework 46.jpg',
		s17: 'Rework 2/Rework 47.jpg',
		s18: 'Rework 2/Rework 48.jpg',
		s19: 'Rework 2/Rework 49.jpg',
		s20: 'Rework 2/Rework 50.jpg',
		s21: 'Rework 2/Rework 51.jpg',
		s22: 'Rework 2/Rework 52.jpg',
		s23: 'Rework 2/Rework 53.jpg',
		s24: 'Rework 2/Rework 54.jpg',
		s25: 'Rework 2/Rework 55.jpg',
		s26: 'Rework 2/Rework 56.jpg',
		s27: 'Rework 2/Rework 57.jpg',
		s28: 'Rework 2/Rework 58.jpg',
		s29: 'Rework 2/Rework 59.jpg',
		s30: 'Rework 2/Rework 60.jpg',
		Quantity: 30,
	}

	let rework2Info = `
	Переработка второго стикер-пака на новый лад. Куда лучше своего предка.
	`

	let pack3Rework = {
		s1: 'Rework 3/Rework 61.jpg',
		s2: 'Rework 3/Rework 62.jpg',
		s3: 'Rework 3/Rework 63.jpg',
		s4: 'Rework 3/Rework 64.jpg',
		s5: 'Rework 3/Rework 65.jpg',
		s6: 'Rework 3/Rework 66.jpg',
		s7: 'Rework 3/Rework 67.jpg',
		s8: 'Rework 3/Rework 68.jpg',
		s9: 'Rework 3/Rework 69.jpg',
		s10: 'Rework 3/Rework 70.jpg',
		s11: 'Rework 3/Rework 71.jpg',
		s12: 'Rework 3/Rework 72.jpg',
		s13: 'Rework 3/Rework 73.jpg',
		s14: 'Rework 3/Rework 74.jpg',
		s15: 'Rework 3/Rework 75.jpg',
		s16: 'Rework 3/Rework 76.jpg',
		s17: 'Rework 3/Rework 77.jpg',
		s18: 'Rework 3/Rework 78.jpg',
		s19: 'Rework 3/Rework 79.jpg',
		s20: 'Rework 3/Rework 80.jpg',
		s21: 'Rework 3/Rework 81.jpg',
		s22: 'Rework 3/Rework 82.jpg',
		s23: 'Rework 3/Rework 83.jpg',
		s24: 'Rework 3/Rework 84.jpg',
		s25: 'Rework 3/Rework 85.jpg',
		s26: 'Rework 3/Rework 86.jpg',
		s27: 'Rework 3/Rework 87.jpg',
		s28: 'Rework 3/Rework 88.jpg',
		s29: 'Rework 3/Rework 89.jpg',
		s30: 'Rework 3/Rework 90.jpg',
		Quantity: 30,
	}

	let rework3Info = `
	Переработка третьего стикер-пака на новый лад. Куда лучше своего предка.
	`

	let objUnderPack = {
		s1: 'Under Pack/Under Sticker 1.jpg',
		s2: 'Under Pack/Under Sticker 2.jpg',
		s3: 'Under Pack/Under Sticker 3.jpg',
		s4: 'Under Pack/Under Sticker 4.jpg',
		s5: 'Under Pack/Under Sticker 5.jpg',
		s6: 'Under Pack/Under Sticker 6.jpg',
		s7: 'Under Pack/Under Sticker 7.jpg',
		s8: 'Under Pack/Under Sticker 8.jpg',
		s9: 'Under Pack/Under Sticker 9.jpg',
		s10: 'Under Pack/Under Sticker 10.jpg',
		s11: 'Under Pack/Under Sticker 11.jpg',
		s12: 'Under Pack/Under Sticker 12.jpg',
		s13: 'Under Pack/Under Sticker 13.jpg',
		s14: 'Under Pack/Under Sticker 14.jpg',
		s15: 'Under Pack/Under Sticker 15.jpg',
		Quantity: 15,
	}

	let underInfo = `
		Стикер-пак по легендарной инди-игре Undertale с перерисованными персонажами.
	`

	let PvzPack = {
		s1: 'PvZ Pack/PVZ Sticker 1.jpg',
		s2: 'PvZ Pack/PVZ Sticker 2.jpg',
		s3: 'PvZ Pack/PVZ Sticker 3.jpg',
		s4: 'PvZ Pack/PVZ Sticker 4.jpg',
		s5: 'PvZ Pack/PVZ Sticker 5.jpg',
		s6: 'PvZ Pack/PVZ Sticker 6.jpg',
		s7: 'PvZ Pack/PVZ Sticker 7.jpg',
		s8: 'PvZ Pack/PVZ Sticker 8.jpg',
		s9: 'PvZ Pack/PVZ Sticker 9.jpg',
		s10: 'PvZ Pack/PVZ Sticker 10.jpg',
		Quantity: 10,
	}

	let pvzInfo = `
		Стикер-пак по старой игре 2009-ого года Plants vs Zombies с более мягким стилем. 
	`

	let objUIpack = {
		s1: 'UI Pack/UI Sticker 1.png',
		s2: 'UI Pack/UI Sticker 2.png',
		s3: 'UI Pack/UI Sticker 3.png',
		s4: 'UI Pack/UI Sticker 4.png',
		s5: 'UI Pack/UI Sticker 5.png',
		s6: 'UI Pack/UI Sticker 6.png',
		s7: 'UI Pack/UI Sticker 7.png',
		s8: 'UI Pack/UI Sticker 8.png',
		s9: 'UI Pack/UI Sticker 9.png',
		s10: 'UI Pack/UI Sticker 10.png',
		Quantity: 10,
	}

	let UIinfo = `
		Самый простой стикер-пак из всех, основанный на ключевых знаках интерфейса.
	`

	let duoPack = {
		s1: 'Duo Pack/Duo Sticker 1.jpg',
		s2: 'Duo Pack/Duo Sticker 2.jpg',
		s3: 'Duo Pack/Duo Sticker 3.jpg',
		s4: 'Duo Pack/Duo Sticker 4.jpg',
		s5: 'Duo Pack/Duo Sticker 5.jpg',
		s6: 'Duo Pack/Duo Sticker 6.jpg',
		s7: 'Duo Pack/Duo Sticker 7.jpg',
		s8: 'Duo Pack/Duo Sticker 8.jpg',
		s9: 'Duo Pack/Duo Sticker 9.jpg',
		Quantity: 9,
	}

	let duoInfo = `
		Стикер-пак по приложению для изучения иностранного языка Duolingo. В стикер-паке присутствует только сам Дуо.
	`

	let ZeroPack = {
		s1: 'Zero Pack/ZeroSticker 1.png',
		s2: 'Zero Pack/ZeroSticker 2.png',
		s3: 'Zero Pack/ZeroSticker 3.png',
		s4: 'Zero Pack/ZeroSticker 4.png',
		s5: 'Zero Pack/ZeroSticker 5.png',
		s6: 'Zero Pack/ZeroSticker 6.png',
		s7: 'Zero Pack/ZeroSticker 7.png',
		s8: 'Zero Pack/ZeroSticker 8.png',
		s9: 'Zero Pack/ZeroSticker 9.png',
		s10: 'Zero Pack/ZeroSticker 10.png',
		s11: 'Zero Pack/ZeroSticker 11.png',
		s12: 'Zero Pack/ZeroSticker 12.png',
		s13: 'Zero Pack/ZeroSticker 13.png',
		s14: 'Zero Pack/ZeroSticker 14.png',
		s15: 'Zero Pack/ZeroSticker 15.png',
		s16: 'Zero Pack/ZeroSticker 16.png',
		s17: 'Zero Pack/ZeroSticker 17.png',
		s18: 'Zero Pack/ZeroSticker 18.png',
		s19: 'Zero Pack/ZeroSticker 19.png',
		s20: 'Zero Pack/ZeroSticker 20.png',
		s21: 'Zero Pack/ZeroSticker 21.png',
		s22: 'Zero Pack/ZeroSticker 22.png',
		s23: 'Zero Pack/ZeroSticker 23.png',
		s24: 'Zero Pack/ZeroSticker 24.png',
		s25: 'Zero Pack/ZeroSticker 25.png',
		s26: 'Zero Pack/ZeroSticker 26.png',
		s27: 'Zero Pack/ZeroSticker 27.png',
		s28: 'Zero Pack/ZeroSticker 28.png',
		s29: 'Zero Pack/ZeroSticker 29.png',
		s30: 'Zero Pack/ZeroSticker 30.png',
		Quantity: 30,
	}

	let zeroInfo = `
		Стикер-пак с нулевым фоном. Простой, но нужный.
	`

	let memePack = {
		s1: 'MemePack/Meme 1.jpg',
		s2: 'MemePack/Meme 2.jpg',
		s3: 'MemePack/Meme 3.jpg',
		s4: 'MemePack/Meme 4.jpg',
		s5: 'MemePack/Meme 5.jpg',
		s6: 'MemePack/Meme 6.jpg',
		s7: 'MemePack/Meme 7.jpg',
		s8: 'MemePack/Meme 8.jpg',
		s9: 'MemePack/Meme 9.jpg',
		s10: 'MemePack/Meme 10.jpg',
		Quantity: 10,
	}

	let memeInfo = `
		Несерьезный стикер-пак по мемам 2024-2025. А так же ошибка человечества.
	`

	let grayPack = {
		s1: 'Grayscale Pack/Gray Sticker 1.jpg',
		s2: 'Grayscale Pack/Gray Sticker 2.jpg',
		s3: 'Grayscale Pack/Gray Sticker 3.jpg',
		s4: 'Grayscale Pack/Gray Sticker 4.jpg',
		s5: 'Grayscale Pack/Gray Sticker 5.jpg',
		s6: 'Grayscale Pack/Gray Sticker 6.jpg',
		s7: 'Grayscale Pack/Gray Sticker 7.jpg',
		s8: 'Grayscale Pack/Gray Sticker 8.jpg',
		s9: 'Grayscale Pack/Gray Sticker 9.jpg',
		s10: 'Grayscale Pack/Gray Sticker 10.jpg',
		Quantity: 10,
	}

	let grayInfo = `
		Серый стикер-пак имеющий в основном печальное / ворчливое настроение
	`

	let glitchPack = {
		s1: 'Glitch Pack/Glitch sticker 1.jpg',
		s2: 'Glitch Pack/Glitch sticker 2.jpg',
		s3: 'Glitch Pack/Glitch sticker 3.jpg',
		s4: 'Glitch Pack/Glitch sticker 4.jpg',
		s5: 'Glitch Pack/Glitch sticker 5.jpg',
		s6: 'Glitch Pack/Glitch sticker 6.jpg',
		s7: 'Glitch Pack/Glitch sticker 7.jpg',
		s8: 'Glitch Pack/Glitch sticker 8.jpg',
		s9: 'Glitch Pack/Glitch sticker 9.jpg',
		s10: 'Glitch Pack/Glitch sticker 10.jpg',
		Quantity: 10,
	}

	let glitchInfo = `
		Glitch Pack - стикер-пак с кучей визуальных багов.
	`

	let locked = false

	let selected = null

	class Cell {
		constructor(
			id,
			iconSrc,
			col,
			name,
			stickers = {},
			href,
			waHref,
			info,
			year,
			month
		) {
			this.Id = id
			this.IconSrc = iconSrc
			this.Color = col
			this.Name = name
			this.Stickers = stickers
			this.TelegramHref = href
			this.WhatsappHref = waHref
			this.Info = info
			this.Year = year
			this.Month = month
			$(`#${this.Id}`).html(`<img src="${this.IconSrc}" class="cellImg">`)
			$(`#${this.Id}`).hover(
				() => {
					if (!isMobile) {
						$(`#${this.Id}`).css('background', this.Color)
						if (!locked) {
							selected = this
							$('#infoText').text(this.Name)
							$('#infoButton').css({
								background: this.Color,
								filter: 'brightness(5.0)',
							})
						}
					}
				},
				() => {
					if (!isMobile) {
						$(`#${this.Id}`).css('background', '#252525')
					}
				}
			)

			$(`#${this.Id}`).click(() => {
				if (!isMobile) {
					if (locked) {
						$('#lock').fadeOut(75)
					} else {
						$('#lock').fadeIn(75)
					}
					locked = !locked
				} else {
					$(`.cell`).css('background', '#252525')
					$(`#${this.Id}`).css('background', this.Color)
					selected = this
					$('#infoText').text(this.Name)
					$('#infoButton').css({
						background: this.Color,
						filter: 'brightness(5.0)',
					})
				}
			})

			$('#infoButton').click(() => {
				this.pasteMoreInfoPage()
			})
		}

		pasteMoreInfoPage() {
			if (selected) {
				$('#page').fadeOut(100, () => {
					setTimeout(() => {
						$('#MIpage').fadeIn(100, () => {
							selected.pasteStickers()
						})
					}, 300)
				})
			}
		}

		pasteStickers() {
			$('#MIgrid').empty()
			$('.MIsticker').off('click')

			$(':root').css('--MIgridRepeat', `${Math.floor(this.Stickers.Quantity / 3)}`)

			for (let i = 1; i <= this.Stickers.Quantity; i++) {
				const stickerId = `#MIsticker${i}`
				$('#MIgrid').append(
					`<img 
                src="${this.Stickers['s' + i]}"
                class="MIsticker" 
                id="${stickerId}"
                onload="this.onload=null;this.style.display='block'"
                onerror="this.style.display='none'"
            >`
				)
			}
			$('.MIsticker').on('click', function() {
				const src = $(this).attr('src')
				$('#boxOfImg').css('display', 'grid')
				$('#stickerImg').attr('src', src)
				console.log(src)
				$('#boxOfImg').on('click', () => {
					$('#boxOfImg').css('display', 'none')
					$('#boxOfImg').off('click')
				})
			})
			if (!isAppendInfoText) {
				$('#MIbox').append('<p class="MIinfo" id="MIinfoText"></p>')
				selected.pasteInfo()
				isAppendInfoText = true
			}
		}

		pasteInfo() {
			$('#MIinfoText').html(`
				${this.Info}<br><br><br>
				Данный стикер-пак был создан в ${this.Year} году, ${this.Month}<br><br>
				Количество стикеров: ${this.Stickers.Quantity}<br><br>
				Название: ${this.Name}
				`)
		}

		openT() {
			window.open(this.TelegramHref, '_blank').focus()
		}

		openW() {
			window.open(this.WhatsappHref, '_blank').focus()
		}

		showStickerPack() {
			$('.MIsticker').css('display', 'block')
			$('.MIinfo').css('display', 'none')
		}

		showStickerPackInfo() {
			$('.MIsticker').css('display', 'none')
			$('.MIinfo').css('display', 'block')
		}
	}

	main1 = new Cell(
		'main1',
		'Icons/Main icon 1.png',
		'#333333',
		'Main Pack 1',
		mainPack1,
		'https://t.me/addstickers/MainPumpkinPack1',
		'https://getstickerpack.com/stickers/mainpumpkinpack-1',
		main1Info,
		'2024',
		'26 сентября'
	)
	main2 = new Cell(
		'main2',
		'Icons/Main icon 2.png',
		'#003031ff',
		'Main Pack 2',
		mainPack2,
		'https://t.me/addstickers/MainPumpkinPack2',
		'https://getstickerpack.com/stickers/mainpumpkinpack-2',
		main2Info,
		'2024',
		'26 октября'
	)
	main3 = new Cell(
		'main3',
		'Icons/Main icon 3.png',
		'#00392a',
		'Main Pack 3',
		mainPack3,
		'https://t.me/addstickers/MainPumpkinPack3',
		'https://getstickerpack.com/stickers/mainpumpkinpack-3',
		main3Info,
		'2024',
		'15 ноября'
	)
	main4 = new Cell(
		'main4',
		'Icons/Main icon 4.png',
		'#330',
		'Main Pack 4',
		mainPack4,
		'https://t.me/addstickers/MainPumpkinPack4',
		'https://getstickerpack.com/stickers/mainpumpkinpack-4',
		main4Info,
		'2025',
		'11 февраля'
	)

	rework1 = new Cell(
		'rework1',
		'Icons/Rework Icon 1.png',
		'#333333',
		'Rework 1',
		pack1Rework,
		'https://t.me/addstickers/PumpkinsRework1',
		'https://getstickerpack.com/stickers/pumpkinrework-1',
		rework1Info,
		'2025',
		'26 мая'
	)
	rework2 = new Cell(
		'rework2',
		'Icons/Rework Icon 2.png',
		'#00392a',
		'Rework 2',
		pack2Rework,
		'https://t.me/addstickers/PumpkinsRework2',
		'https://getstickerpack.com/stickers/pumpkinrework-2',
		rework2Info,
		'2025',
		'28 июня'
	)

	rework3 = new Cell(
		'rework3',
		'Icons/Rework Icon 3.png',
		'#003939ff',
		'Rework 3',
		pack3Rework,
		'https://t.me/addstickers/PumpkinsRework3',
		'https://getstickerpack.com/stickers/pumpkinrework-3',
		rework3Info,
		'2025',
		'4 августа'
	)

	duo = new Cell(
		'duo',
		'Icons/Duo Icon.png',
		'#253300',
		'Duo Pack',
		duoPack,
		'https://t.me/addstickers/DoulingoPixelPack',
		'https://getstickerpack.com/stickers/duopack',
		duoInfo,
		'2024',
		'11 декабря'
	)
	pvz = new Cell(
		'pvz',
		'Icons/Pvz Icon.png',
		'#333333',
		'PvZ Pack',
		PvzPack,
		'https://t.me/addstickers/PvzPixelPack',
		'https://getstickerpack.com/stickers/pvzstickerpack',
		pvzInfo,
		'2025',
		'13 марта'
	)
	underTale = new Cell(
		'undertale',
		'Icons/Under Pack Icon.png',
		'#330000',
		'UnderPack',
		objUnderPack,
		'https://t.me/addstickers/UnderPackByPumpkin',
		'https://getstickerpack.com/stickers/underpack',
		underInfo,
		'2025',
		'6 августа'
	)

	emoji = new Cell(
		'emoji',
		'Icons/Emoji Icon.png',
		'#330',
		'Emoji Pack',
		emojiPack,
		'https://t.me/addstickers/SmilePackk',
		'https://getstickerpack.com/stickers/emojipack',
		emojiInfo,
		'2025',
		'2 апреля'
	)

	bwPack = new Cell(
		'bw',
		'Icons/B&W Icon.png',
		'#333',
		'B&W Pack',
		bwPack,
		'https://t.me/addstickers/BandWpack',
		'https://getstickerpack.com/stickers/black-white-pack',
		bwInfo,
		'2025',
		'3 августа'
	)
	zero = new Cell(
		'zero',
		'Icons/Zero Icon.png',
		'#333333ff',
		'ZeroPack',
		ZeroPack,
		'https://t.me/addstickers/ZeroPackByPumpkin',
		'https://getstickerpack.com/stickers/zero-pack',
		zeroInfo,
		'2025',
		'30 августа'
	)
	ui = new Cell(
		'ui',
		'Icons/UI Icon.png',
		'#333333ff',
		' UIpack',
		objUIpack,
		'https://t.me/addstickers/UIpack_byPUMPKIN',
		'https://getstickerpack.com/stickers/uipack',
		UIinfo,
		'2025',
		'16 августа'
	)
	meme = new Cell(
		'meme',
		'Icons/Meme Icon.png',
		'#00392a',
		'MemePack',
		memePack,
		'https://t.me/addstickers/PixelPackMeme2025',
		'https://getstickerpack.com/stickers/memepixelpack',
		memeInfo,
		'2025',
		'31 мая'
	)
	glitch = new Cell(
		'glitch',
		'Icons/Glitch Pack Icon.png',
		'#00332fff',
		'GlitchPack',
		glitchPack,
		'https://t.me/addstickers/GlitchPumpkin',
		'https://getstickerpack.com/stickers/glitch-pack',
		glitchInfo,
		'2025',
		'13 сентября'
	)
	gray = new Cell(
		'gray',
		'Icons/Gray Icon.png',
		'#333333',
		'GrayscalePack',
		grayPack,
		'https://t.me/addstickers/GrayscalePumpkin',
		'https://getstickerpack.com/stickers/grayscale-pack',
		grayInfo,
		'2025',
		'13 сентября'
	)

	function showMainPacks() {
		display('.cell', false)
		display('.main', true)
	}

	function showReworks() {
		display('.cell', false)
		display('.rework', true)
	}

	function showOtherFandomPacks() {
		display('.cell', false)
		display('.fandom', true)
	}

	function showAllPacks() {
		display('.cell', true)
	}

	function display(obj, bool) {
		if (bool) {
			$(obj).css('display', '')
		} else {
			$(obj).css('display', 'none')
		}
	}

	$('#main').click(() => showMainPacks())
	$('#rework').click(() => showReworks())
	$('#fandom').click(() => showOtherFandomPacks())
	$('#all').click(() => showAllPacks())

	$('#forTelegram').click(() => selected.openT())
	$('#forWhatsapp').click(() => selected.openW())

	$('#MIbtnStickers').click(() => selected.showStickerPack())
	$('#MIbtnInfo').click(() => selected.showStickerPackInfo())

	
})
