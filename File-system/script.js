window.addEventListener('load', function () {
    let alphabet = ['A', 'E', 'I', 'O', 'U', 'Y', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let path = []

    let list = {}
    let elems = {
        body: document.querySelector('body'),
        toolBar: {
            fileSpace: document.querySelector('.file-space'),
            btns: document.querySelectorAll('.tool-bar button'),
            pathFolder: document.querySelector('.pathFolders')
        },
        modal: {
            // basic elems
            closeBtns: document.querySelectorAll('#modal .close'),

            modalCreateRename: {
                titleName: document.querySelector('#modal.modal-f .title-name'),
                wrap: document.querySelector('#modal.modal-f'),
                input: document.querySelector('input'),
                submit: document.querySelector('#submit-modal'),
                warning: document.querySelector('#modal span'),
            },
        },
        contextMenu: {
            wrap: document.querySelector('.context-folder'),
            tools: document.querySelectorAll('.context-tool'),
        }
    }
    renderFolders()

    elems.modal.modalCreateRename.submit.addEventListener('click', function () {
        switch (this.getAttribute('data-target')) {
            case 'create':
                createItem(findPath(list, path), elems.modal.modalCreateRename.input.value);
                renderFolders(findPath(list, path))
                break;
            case 'rename':
                renameFolder(findPath(list, path), elems.contextMenu.wrap.getAttribute('data-targ'), elems.modal.modalCreateRename.input.value);
                renderFolders(findPath(list, path))
                break;
        }
    });

    for (let i = 0; i < elems.contextMenu.tools.length; i++) {
        elems.contextMenu.tools[i].addEventListener('click', function (e) {
            switch (this.getAttribute('data-action')) {
                case 'rename':
                    renderModal('rename');
                    break;
                case 'delete':
                    delete findPath(list, path)[elems.contextMenu.wrap.getAttribute('data-targ')]
                    elems.contextMenu.wrap.removeAttribute('data-targ')
                    renderFolders(findPath(list, path));
                    break;
            }
        })
    }

    // toolbar btns
    for(let i =0; i<elems.toolBar.btns.length; i++) {
        elems.toolBar.btns[i].addEventListener('click', function() {
            switch(this.getAttribute('data-type')) {
                case 'create':
                    renderModal('create')
                    break;
                case 'back':
                    path.pop();
                    renderFolders(findPath(list, path));
                    clear(elems.toolBar.pathFolder.querySelectorAll('li'));
                    renderPath(writePath(list, path));
                    moveFolder()
                    break;
            }
        })
    }

    // ___ALERT'S FRONT___

    

    /* закрытие алерта */
    for (let i = 0; i < elems.modal.closeBtns.length; i++) {
        elems.modal.closeBtns[i].addEventListener('click', function () {
            viewControl(elems.modal.modalCreateRename.wrap, 'none')
        })
    }

    // ___ FUNCTION'S FRONT ___

    /* рендеринг Модального окна */
    function renderModal(funcAlert) {
        viewControl(elems.modal.modalCreateRename.wrap, 'flex');
        switch (funcAlert) {
            case 'create':
                // заголовок
                elems.modal.modalCreateRename.titleName.innerHTML = 'Создать новую папку';
                // контент подтверждения
                elems.modal.modalCreateRename.submit.setAttribute('data-target', 'create');
                elems.modal.modalCreateRename.submit.innerHTML = 'Создать';
                // инпут значение поумолчанию
                elems.modal.modalCreateRename.input.value = elems.modal.modalCreateRename.input.getAttribute('value');
                // фокус на инпуте
                elems.modal.modalCreateRename.input.select();
                break;
            case 'rename':
                elems.modal.modalCreateRename.titleName.innerHTML = 'Переименовать папку';

                elems.modal.modalCreateRename.submit.setAttribute('data-target', 'rename');
                elems.modal.modalCreateRename.submit.innerHTML = 'Переименовать'

                elems.modal.modalCreateRename.input.value = findPath(list, path)[elems.contextMenu.wrap.getAttribute('data-targ')].data.name;

                elems.modal.modalCreateRename.input.select();
                break;
        }
    }

    function createItem(obj, name) {
        let id = uniqueСode(3, 3)
        obj[id] = {
            data: {
                name: name,
                date: String(new Date().getDate()) + '.' + String(new Date().getMonth() + 1) + '.' + String(new Date().getFullYear()),
                type: 'folder',
            }
        };
        viewControl(elems.modal.modalCreateRename.wrap, 'none');
        
    }

    /* добавление контекстного меню (ЛКМ) к элементам */
    function addContext() {
        // находим все элементы
        let list = document.querySelectorAll('.folder');
        // вешаем на все сущ-е элементы событие
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener('contextmenu', function (e) {
                e.preventDefault();
                elems.contextMenu.wrap.style.left = e.clientX + 'px';
                elems.contextMenu.wrap.style.top = e.clientY + 'px';
                viewControl(elems.contextMenu.wrap, 'block');

                elems.contextMenu.wrap.setAttribute('data-targ', this.getAttribute('data-key'))
            })
            window.addEventListener('click', function () {
                viewControl(elems.contextMenu.wrap, 'none');
            });
        }
    }

    /*добавляет возможность зайти в папку*/
    function addOpenFunc() {
        let folderList = document.querySelectorAll('.folder');
        for (let i = 0; i < folderList.length; i++) {
            folderList[i].addEventListener('dblclick', function () {
                path.push(this.getAttribute('data-key'))
                clear(elems.toolBar.pathFolder.querySelectorAll('li'))
                renderPath(writePath(list, path))
                moveFolder()
                renderFolders(findPath(list, path))
            })
        }
    }

    /* Отрисовка элементов Обьекта */
    function renderFolders(obj) {
        clear(document.querySelectorAll('.item'));
        for (let key in obj) {
            if (key != "data") {
                elems.toolBar.fileSpace.insertAdjacentHTML('beforeend', `<div data-key="${key}" class="folder item"><div class="folder-icon"><img src="./folder.svg"></div><div class="folder-name">${obj[key].data.name}</div></div>`);
            }
        }
        addContext();
        addOpenFunc();
    }
    
    /* Очистка place */
    function clear(folder) {
        for (let i = 0; i < folder.length; i++) {
            folder[i].remove()
        }
    }

    /* переименовываем элемент */
    function renameFolder(obj, identify, newName) {
        obj[identify].data.name = newName
        elems.contextMenu.wrap.removeAttribute('data-targ')
        viewControl(elems.modal.modalCreateRename.wrap, 'none');
    }

    /* Изменение статуса видимости элемента */
    function viewControl(elem, dis) {
        elem.style.display = dis;
    }



    /* Это нужно для создания уникальных идентификаторов */

    /* Рандомное сочетание букв */
    function randLetter(maxLength) {
        let randWord = ''
        for (let i = 0; i < maxLength; i++) {
            randWord += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return randWord
    }
    /* Рандомное сочетание букв */
    function randNum(maxLength) {
        let randNum = ''
        for (let i = 0; i < maxLength; i++) {
            randNum += number[Math.floor(Math.random() * number.length)]
        }
        return randNum;
    }
    /* исключаем совпадения */
    function uniqueСode(maxLetter, maxNumber) {
        let readyCode = randLetter(maxLetter) + randNum(maxNumber) + randLetter(maxLetter);
        if (readyCode in findPath(list, path)) {
            return uniqueСode(maxLetter, maxNumber);
        } else {
            return readyCode
        }
    }



    // функция возвращающая конечный обьект по пути из массива
    function findPath(obj, path) {
        let res = obj;
        for (let i = 0; i < path.length; i++) {
            res = res[path[i]]
        }
        return res
    }

    // выводит на экран текущий путь
    function writePath(obj, path) {
        let res = obj;
        let text = [];
        for (let i = 0; i < path.length; i++) {
            res = res[path[i]]
            text.push(res.data.name);
        }
        return text
    }

    // вставка путя в адрес
    function renderPath(arrPath) {
        arrPath.unshift('home')
        for (let key in arrPath) {
            elems.toolBar.pathFolder.insertAdjacentHTML("beforeend", `<li data-trans="${key}">${arrPath[key]}</li>`);
        }
    }

    // вешаем событие при нажатии на ссылку
    function moveFolder() {
        let links = document.querySelectorAll('.pathFolders li');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                path = path.slice(0, Number(this.getAttribute('data-trans')));
                renderFolders(findPath(list, path));
                clear(elems.toolBar.pathFolder.querySelectorAll('li'));
                renderPath(writePath(list, path));
                moveFolder()
            })
        }
    }

})
