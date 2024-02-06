document.addEventListener('DOMContentLoaded', function() {
	window.onload = function() {
	
		const lineContent = document.querySelectorAll('.line__content');

		let currentWidth = 0;
		const scrollSpeed = 1; 

		function scrollText() {
			currentWidth -= scrollSpeed;
			lineContent.forEach(item => {
				item.style.transform = `translateX(${currentWidth}px)`;
			});

			if (Math.abs(currentWidth) >= lineContent[0].offsetWidth) {
				currentWidth = 0;
			}

			requestAnimationFrame(scrollText);
		}

		scrollText();
	};








	/* участники */

	const cardsVisible = document.querySelectorAll('.tournament-block__cards-1, .tournament-block__cards-2, .tournament-block__cards-3');
	const cardsHidden = document.querySelectorAll('.tournament-block__cards-4, .tournament-block__cards-5, .tournament-block__cards-6');
	const scoreBill = document.querySelector('.score__bill');

	// Устанавливаем изначальное значение счетчика
	let scoreValue = 3;
	scoreBill.textContent = scoreValue;

	setInterval(function() {
		toggleVisibility();
		toggleScore();
	}, 4000);

	function toggleVisibility() {
		cardsVisible.forEach(card => {
			card.classList.toggle('hidden');
		});

		cardsHidden.forEach(card => {
			card.classList.toggle('hidden');
		});
	}

	function toggleScore() {
		scoreValue = (scoreValue === 3) ? 6 : 3;
		scoreBill.textContent = scoreValue;
	}






	/* участники адаптация */


	// Получаем все карточки
	const cardElements = document.querySelectorAll('.blockCardsTwoPieces__block .card');

	// Индекс текущей отображаемой карточки
	let currentIndex = 0;

	// Функция для переключения класса hidden на следующей карточке
	function toggleNextCard() {
		// Скрываем текущую карточку
		cardElements[currentIndex].classList.add('hidden');

		// Увеличиваем индекс, переходя к следующей карточке
		currentIndex = (currentIndex + 1) % cardElements.length;

		// Показываем следующую карточку
		cardElements[currentIndex].classList.remove('hidden');
	}

	// Вызываем функцию toggleNextCard каждые 4 секунды
	setInterval(toggleNextCard, 4000);


	/* от 1 до 6 */



	// Получаем элементы с классами score__bill и blockCardsTwoPieces__Arrowse
	const scoreBillElement = document.querySelector('.blockCardsTwoPieces__number .score__bill');

	// Текущее значение счетчика
	let currentScore = 1; // Установим начальное значение счетчика

	// Функция для обновления счетчика
	function updateScore() {
		// Увеличиваем значение счетчика
		currentScore++;

		// Если счетчик достигает 7, сбрасываем его до 1
		if (currentScore > 6) {
			currentScore = 1;
		}

		// Обновляем содержимое элемента
		scoreBillElement.textContent = currentScore.toString();
	}

	// Интервал для обновления цифры каждые 4 секунды
	const scoreIntervalId = setInterval(updateScore, 4000);






	




	















	



	// Получаем ссылку на элементы с классами grid-container и stagesTableContainer__containerAdap
	const gridContainer = document.querySelector('.grid-container');
	const stagesContainer = document.querySelector('.stagesTableContainer__containerAdap');

	// Получаем кнопки "вправо" и "влево" и все карточки
	const rightButton = document.querySelector('.stagesTableContainer__right');
	const leftButton = document.querySelector('.stagesTableContainer__left');
	const cards = document.querySelectorAll('.stagesTableContainer__card');

	// Функция для добавления класса hidden
	function addHiddenClass() {
		gridContainer.classList.add('hidden');
		stagesContainer.classList.remove('hidden'); // Удаляем класс hidden
	}

	// Функция для удаления класса hidden
	function removeHiddenClass() {
		gridContainer.classList.remove('hidden');
		stagesContainer.classList.add('hidden'); // Добавляем класс hidden
	}

	// Функция, которая будет вызываться при изменении размеров окна
	function handleResize() {
		// Определяем ширину окна
		const windowWidth = window.innerWidth;

		// Если ширина меньше порогового значения для адаптации, добавляем класс hidden
		if (windowWidth <= 1200 && windowWidth > 620) {
			addHiddenClass();
		} else if (windowWidth <= 620 && windowWidth > 375) {
			addHiddenClass();
		} else if (windowWidth <= 375) {
			addHiddenClass();
		} else {
			// Если окно больше порогового значения, удаляем класс hidden
			removeHiddenClass();
		}
	}

	// Функция для переключения видимости карточек
	function toggleCardVisibility(direction) {
		// Получаем индекс видимой карточки
		let visibleIndex;
		for (let i = 0; i < cards.length; i++) {
			if (!cards[i].classList.contains('hidden')) {
				visibleIndex = i;
				break;
			}
		}

		// Скрываем текущую видимую карточку
		cards[visibleIndex].classList.add('hidden');

		// Определяем индекс следующей карточки в зависимости от направления
		let nextIndex = (visibleIndex + direction + cards.length) % cards.length;

		// Показываем следующую карточку
		cards[nextIndex].classList.remove('hidden');

		// Устанавливаем класс "transparent" для всех элементов "mugs"
		const mugs = document.querySelectorAll('.mugs');
		for (let i = 0; i < mugs.length; i++) {
			if (i === nextIndex) {
				mugs[i].classList.remove('transparent');
			} else {
				mugs[i].classList.add('transparent');
			}
		}

		// Блокируем кнопки "вправо" и "влево" при необходимости
		if (nextIndex === 0) {
			leftButton.classList.add('transparent');
		} else if (nextIndex === cards.length - 1) {
			rightButton.classList.add('transparent');
		} else {
			leftButton.classList.remove('transparent');
			rightButton.classList.remove('transparent');
		}
	}

	// Назначаем обработчик события на кнопку "вправо"
	rightButton.addEventListener('click', function() {
		if (!rightButton.classList.contains('transparent')) {
			toggleCardVisibility(1); // Переключаем карточки вправо
		}
	});

	// Назначаем обработчик события на кнопку "влево"
	leftButton.addEventListener('click', function() {
		if (!leftButton.classList.contains('transparent')) {
			toggleCardVisibility(-1); // Переключаем карточки влево
		}
	});

	// Добавляем обработчик события на изменение размеров окна
	window.addEventListener('resize', handleResize);

	// Вызываем функцию при загрузке страницы для начальной настройки классов
	handleResize();




	





























	





	// Функция для прокрутки к нужной секции
	function scrollToSection(sectionClass) {
		const section = document.querySelector(sectionClass);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Обработчик нажатий на кнопки первой секции
	document.querySelectorAll('.contentContainer__firstButton, .contentContainer__firstButtons').forEach(button => {
		button.addEventListener('click', function() {
			scrollToSection('.secondSection');
		});
	});

	// Обработчик нажатий на кнопки второй секции
	document.querySelectorAll('.contentContainer__secondButton, .contentContainer__secondButtons').forEach(button => {
		button.addEventListener('click', function() {
			scrollToSection('.thirdSection');
		});
	});















	
































});




