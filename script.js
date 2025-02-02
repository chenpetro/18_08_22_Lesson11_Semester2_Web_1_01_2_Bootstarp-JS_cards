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
    }

];


(function(arrOfTasks){
    const odjOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc
    }, {})

    renderAllTasks (odjOfTasks)

    function renderAllTasks(taskList){
        
        if (!taskList) {
            console.error('You haven´t filled out a list of tasks');
            return
            
        }

        const fragment = document.createDocumentFragment();
        Object.values(taskList).forEach(task => {
            const taskCard = listItemTemplate(task) 
        })
    }
    
    function listItemTemplate() {
        const col = document.createElement('div');
        col.classList.add('col-lg-4');

        const card = document.createElement('div');
        card.classList.add('card', 'text-light', 'bg-dark', 'm-3', 'p-3');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-info', 'delete-btn');
    }

}(tasks));

