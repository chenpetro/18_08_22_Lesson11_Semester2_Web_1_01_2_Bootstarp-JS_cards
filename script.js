// map
// filter
// reduce

// let arr = ['Tesla', 'BMW', "Mercedes"]
// let arr2 = arr.map(item => item.length)
// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5]

// // arr.reduce(function(accumulator, item, index, array){

// // }, 1)

// let result = arr.reduce(function(accumulator, item){

//     return accumulator + item

// }, 0)

// console.log(result);


const tasks = [

    {
        _id: 'wej89332jd289cdwjed111',
        completed: true,
        body: 'make something',
        title: 'header for our task'
    },
    {
        _id: 'gegt54vtgtg55g4g52222',
        completed: true,
        body: 'make something2',
        title: 'header for our task2'
    },
    {
        _id: 'egtrzhz5333',
        completed: true,
        body: 'make something3',
        title: 'header for our task3'
    },
    // {
    //     _id: 'egtrzhzfwe5333',
    //     completed: true,
    //     body: 'make something3',
    //     title: 'header for our task4'
    // },

];


(function(arrOfTasks){
    const odjOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc
    }, {})

    // dom elements

    const tasksCards = document.querySelector('.tasks-cards')
    // console.log(tasksCards);
    
    const form = document.forms['add-task'];
    const inputTitle =form.elements['title']
    const inputBody =form.elements['body']

    renderAllTasks (odjOfTasks)

    form.addEventListener('submit', onFormSubmitHandler)

    function renderAllTasks(taskList){
        
        if (!taskList) {
            console.error('You haven´t filled out a list of tasks');
            return
            
        }

        const fragment = document.createDocumentFragment();
        Object.values(taskList).forEach(task => {
            const taskCard = listItemTemplate(task) 
            console.log(taskCard);
            
            fragment.appendChild(taskCard)
            console.log(fragment);
            
        })
        tasksCards.appendChild(fragment)

    }
    
    function listItemTemplate({_id, title, body} = {}) {
        // console.log(_id, title, body);
        
        const col = document.createElement('div');
        col.classList.add('col-lg-4');
        
        const card = document.createElement('div');
        card.classList.add('card', 'text-light', 'bg-dark', 'm-3', 'p-3');
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = body;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-info', 'delete-btn');
        deleteBtn.textContent = 'Remove'
    
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        
        card.appendChild(cardBody)
        card.appendChild(deleteBtn)
        col.appendChild(card)

        return col
    }

    function onFormSubmitHandler(e) {
       e.preventDefault() 
       const titleValue = inputTitle.value;
       const inputBodyValue = inputBody.value;
       if (!titleValue || !inputBodyValue){
        alert('you haven´t filled the task or the description')
        return
       }

       const task = createTask(titleValue, inputBodyValue)
       const taskItem = listItemTemplate(task)
    //    tasksCards.appendChild(taskItem)
        tasksCards.insertAdjacentElement('afterbegin', taskItem)
        form.reset()
        // inputTitle.value = '';
        // inputBody.value = ''
    }

    function createTask(title, body){
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task-${Math.random()}`
        };
        console.log(newTask);
        odjOfTasks[newTask._id] = newTask
        return {...newTask}
    }
}(tasks));

