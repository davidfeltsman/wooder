const Modal = function() {
    const _createModal = function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        return modal;
    }

    const $modal = _createModal();
    const methods = {
        initModal(type) {
            document.body.append($modal);
        },
        openModal() {},
        closeModal() {},
        removeModal() {},
    }

    const linktype = function(evt) {
        if (evt.target.hasAttribute('data-form')) {
            evt.preventDefault();
            let evtType = 'form';
            console.log(evtType);
            console.log('ye');
            return
        }
        if (evt.target.hasAttribute('data-video')) {
            evt.preventDefault();
            console.log('vid');
            return
        }
        
    }

    document.addEventListener('click', linktype);

    return methods;
};


const modal = new Modal();