
const ModalDiscipline={
    open(){
        document.querySelector('.modal-overlay-insert-discipline')
        .classList
        .add('active-modal-discipline')
    },

    close(){
        document.querySelector('.modal-overlay-insert-discipline')
        .classList
        .remove('active-modal-discipline')
    }
}

const ModalFlashcard={
    open(){
        document.querySelector('.modal-overlay-insert-flashcard')
        .classList
        .add('active-flashcard')
    },

    close(){
        document.querySelector('.modal-overlay-insert-flashcard')
        .classList
        .remove('active-flashcard')
    }
}

/*INSERIR CARD DISCIPLINA*/

let newCard={
    insert(){
        document.querySelector('#discipline')
        .innerHTML = `<div class='card'>teste </div>`

        ModalDiscipline.close()
    }
}
