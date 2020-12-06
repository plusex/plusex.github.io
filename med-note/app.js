window.addEventListener('load', ()=>{
	let list = {
		count: 0,
	}
	class Schedule {
		constructor() {
			this.name = null,
			this.totalCount = null,
			this.count = 0,
			this.isCompleted = false,
			this.description = ''
		}
		create(name, totalCount, description) {
			this.name = name;
			this.totalCount = totalCount;
			this.description = description;
		}
		push() {
			list[list.count] = {...this};
			list.count++;
			localStorage.setItem('list', JSON.stringify(list))
		}
	}

	if(localStorage.getItem('list') !== null){
		list = {...list, ...JSON.parse(localStorage.getItem('list'))}
	}
	render(list)

	document.querySelector('#create-schedule').addEventListener('click', function(e){
		this.parentNode.classList.toggle('clicked')
	})
	document.querySelector('#schedule_data').addEventListener('submit', function(e){
		e.preventDefault();

		let schedule = new Schedule;
		let scheduleName = this.querySelector('#itemName');
		let scheduleCount = this.querySelector('select');
		let scheduleDescription = this.querySelector('#itemDescription');
		
		schedule.create(scheduleName.value, scheduleCount.value, scheduleDescription.value);

		scheduleName.value = '';
		scheduleCount.value = 1;
		scheduleDescription.value = '';

		schedule.push()

		this.parentNode.classList.remove('clicked')

		render(list)
	})
	document.querySelector('#reset').addEventListener('click', ()=> {
		if(confirm('НОВЫЙ ДЕНЬ?!')){
			for(let item in list){
				list[item].count = 0
				list[item].isCompleted = false
			}
			localStorage.setItem('list', JSON.stringify(list))
			render(list)
		}
		
	})
	document.querySelector('#reload').addEventListener('click', ()=> {
		if(confirm('УДАЛИТЬ ВСЁ?!')){
			localStorage.removeItem('list');
			list = {count: 0}
			render(list)
		}
	})

	function render(obj) {
		const scheduleList = document.querySelector('.schedule-list');
		scheduleList.innerHTML = ''

		const schedules = (({count, ...rest}) => rest)(obj)
		
		for(let item in schedules) {
			let schedule =  createScheduleElem(schedules[item])
			scheduleList.appendChild(schedule)
		}
	}

	function createScheduleElem(obj) {
		let {totalCount, name, count, description} = obj
		const schedule = document.createElement('div');
		schedule.classList.add('schedule');

		if(obj.isCompleted) {
			schedule.classList.add('completed');
		}

		const information = document.createElement('div');
		information.classList.add('information');

		const descriptionText = document.createElement('div');
		descriptionText.innerText = description

		const h5 = document.createElement('h5');
		h5.innerText = name;

		const stat = document.createElement('div');
		stat.classList.add('stat-wrapper');
		stat.innerText = 'За день:';

		const currentCount = document.createElement('span');
		currentCount.innerText = count;

		const totalCountSchedule = document.createElement('span');
		totalCountSchedule.innerText = totalCount;

		const button = document.createElement('button');
		button.innerText = '+';
		button.addEventListener('click', function(){
			obj.count++
			if(obj.count === +obj.totalCount) {
				obj.isCompleted = true;
			}
			localStorage.setItem('list', JSON.stringify(list))
			render(list)
		})
		if(obj.isCompleted){
			button.disabled = true
		}

		stat.appendChild(currentCount);
		stat.appendChild(totalCountSchedule);

		information.appendChild(h5);
		information.appendChild(descriptionText);
		information.appendChild(stat);

		schedule.appendChild(information)
		schedule.appendChild(button)

		return schedule
	}
})