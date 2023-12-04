window.addEventListener('load', function() {

    let tableBody = document.querySelector('.table_body');
    let inputDate = document.querySelector('.input_date');
    let inputName = document.querySelector('.input_name');
    let inputCourse = document.querySelector('.input_course');
    let inputAssessment = document.querySelector('.input_assessment');
    let addButton = document.querySelector('.add__btn');
    let inputNameFilter = document.querySelector('.input_name-filter');
    let filterButton = document.querySelector('.filter_btn');
    let showElem = document.querySelector('.show');
    let topButton = document.querySelector('.top_btn');
    let showElemTop = document.querySelector('.show_top');

    const PersonLogbook = function(date = '', name = '', course = '', assessment = '') {
        this.date = date;
        this.name = name;
        this.course = course;
        this.assessment = assessment;

        let tableStr = document.createElement('tr');
        tableStr.classList.add('table_cells');
        tableBody.append(tableStr);

        let cellDate = document.createElement('td');
        cellDate.classList.add('cell_data');
        tableStr.append(cellDate);
        cellDate.innerHTML = this.date;

        let cellName = document.createElement('td');
        cellName.classList.add('cell_name');
        tableStr.append(cellName);
        cellName.innerHTML = this.name;

        let cellCourse = document.createElement('td');
        cellCourse.classList.add('cell_course');
        tableStr.append(cellCourse);
        cellCourse.innerHTML = this.course;

        let cellAssessment = document.createElement('td');
        cellAssessment.classList.add('cell_assessment');
        tableStr.append(cellAssessment);
        cellAssessment.innerHTML = this.assessment;

        let btnClear = document.createElement('td');
        btnClear.classList.add('btn_clear');
        tableStr.append(btnClear);
        btnClear.innerHTML = '&#128465';

        const clearStr = function() {
            tableStr.innerHTML = '';
        };

        btnClear.addEventListener('click', clearStr);

        this.show = function() {

            let showPerson = document.createElement('div');
            showPerson.classList.add('show_person');
            showElem.append(showPerson);

            let showDate = document.createElement('span');
            showDate.classList.add('show_elem');
            showPerson.append(showDate);
            showDate.innerHTML = `Date: ${this.date}`;

            let showName = document.createElement('span');
            showName.classList.add('show_elem');
            showPerson.append(showName);
            showName.innerHTML = `Name: ${this.name}`;

            let showCourse = document.createElement('span');
            showCourse.classList.add('show_elem');
            showPerson.append(showCourse);
            showCourse.innerHTML = `Course: ${this.course}`;

            let showAssessment = document.createElement('span');
            showAssessment.classList.add('show_elem');
            showPerson.append(showAssessment);
            showAssessment.innerHTML = `Assessment: ${this.assessment}`;

        }

        this.showTop = function() {

            let showPerson = document.createElement('div');
            showPerson.classList.add('show_person');
            showElemTop.append(showPerson);

            let showDate = document.createElement('span');
            showDate.classList.add('show_elem');
            showPerson.append(showDate);
            showDate.innerHTML = `Date: ${this.date}`;

            let showName = document.createElement('span');
            showName.classList.add('show_elem');
            showPerson.append(showName);
            showName.innerHTML = `Name: ${this.name}`;

            let showCourse = document.createElement('span');
            showCourse.classList.add('show_elem');
            showPerson.append(showCourse);
            showCourse.innerHTML = `Course: ${this.course}`;

            let showAssessment = document.createElement('span');
            showAssessment.classList.add('show_elem');
            showPerson.append(showAssessment);
            showAssessment.innerHTML = `Assessment: ${this.assessment}`;

        }

    };

    const Logbook = function() {
        this.data = [];

        this.add = function(person = {}) {
            this.data.push(person);
        }

        this.nameFilter = function() {
            let resultFilter = this.data.filter(function(item) {
                return item.name == inputNameFilter.value;
            });
            resultFilter.forEach(function(item) {
                item.show();
            });
        };

        this.topFilter = function() {

            let topFilter = this.data.filter(function(item) {
                let topAssessment = false;

                if (item.assessment > 7) topAssessment = true;

                return topAssessment;
            });
            topFilter.forEach(function(item) {
                item.showTop();
            });
        };

    };

    let logbook = new Logbook ();

    const addPerson = function() {
        addButton.addEventListener('click', function() {
            logbook.add(new PersonLogbook (inputDate.value, inputName.value, inputCourse.value, inputAssessment.value));
            inputDate.value = '';
            inputName.value = '';
            inputCourse.value = '';
            inputAssessment.value = '';
        });
    }

    const nameFilter = function() {
        filterButton.addEventListener('click', function() {
            showElem.innerHTML = '';
            logbook.nameFilter();
            inputNameFilter.value = '';
        });

    }

    const topFilter = function() {
        topButton.addEventListener('click', function() {
            showElemTop.innerHTML = '';
            logbook.topFilter();
        });
    }

    addPerson();
    nameFilter();
    topFilter();

});



